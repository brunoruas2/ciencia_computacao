import React, {useEffect, useRef, useCallback, useState} from 'react';
import {useHistory} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import graphData from '@site/src/data/zettel-graph.json';
import styles from './styles.module.css';

interface GraphNode {
  id: string;
  title: string;
  tags: string[];
  color: string;
  connections: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

interface GraphLink {
  source: string | GraphNode;
  target: string | GraphNode;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

function ZettelGraphCanvas(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const simulationRef = useRef<any>(null);
  const history = useHistory();
  const baseUrl = useBaseUrl('/zettel/');

  // Interaction state refs (avoid re-renders)
  const transformRef = useRef({x: 0, y: 0, scale: 1});
  const dragRef = useRef<{active: boolean; nodeIndex: number; startX: number; startY: number; isPan: boolean}>({
    active: false, nodeIndex: -1, startX: 0, startY: 0, isPan: false,
  });
  const hoverRef = useRef<number>(-1);
  const [tooltip, setTooltip] = useState<{x: number; y: number; title: string; tags: string[]; connections: number} | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const getNodeRadius = useCallback((node: GraphNode) => {
    return Math.max(4, Math.min(14, 4 + node.connections * 1.5));
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
    // Recenter after layout change
    setTimeout(() => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        transformRef.current = {x: rect.width / 2, y: rect.height / 2, scale: 1};
      }
    }, 50);
  }, []);

  // Escape key exits fullscreen
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFullscreen]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Setup canvas size
    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Import d3-force dynamically
    import('d3-force').then((d3) => {
      const data: GraphData = JSON.parse(JSON.stringify(graphData));
      const width = container.getBoundingClientRect().width;
      const height = container.getBoundingClientRect().height;

      // Center transform
      transformRef.current = {x: width / 2, y: height / 2, scale: 1};

      // Create simulation
      const simulation = d3.forceSimulation(data.nodes as any)
        .force('link', d3.forceLink(data.links).id((d: any) => d.id).distance(60).strength(0.3))
        .force('charge', d3.forceManyBody().strength(-120).distanceMax(300))
        .force('center', d3.forceCenter(0, 0))
        .force('collision', d3.forceCollide().radius((d: any) => getNodeRadius(d) + 2))
        .alphaDecay(0.02)
        .velocityDecay(0.3);

      simulationRef.current = {simulation, data};

      // Draw function
      const draw = () => {
        const {width: w, height: h} = canvas.getBoundingClientRect();
        const {x: tx, y: ty, scale} = transformRef.current;
        const hovIdx = hoverRef.current;

        ctx.clearRect(0, 0, w, h);

        // Background
        ctx.fillStyle = '#0d1117';
        ctx.fillRect(0, 0, w, h);

        // Stars background
        ctx.save();
        const starSeed = 42;
        for (let i = 0; i < 200; i++) {
          const sx = ((starSeed * (i + 1) * 9301 + 49297) % 233280) / 233280 * w;
          const sy = ((starSeed * (i + 1) * 7919 + 12345) % 233280) / 233280 * h;
          const brightness = ((i * 3571) % 100) / 100;
          ctx.fillStyle = `rgba(255, 255, 255, ${0.05 + brightness * 0.15})`;
          ctx.beginPath();
          ctx.arc(sx, sy, 0.5 + brightness * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        ctx.save();
        ctx.translate(tx, ty);
        ctx.scale(scale, scale);

        // Get connected node IDs for hover highlight
        const hoveredConnections = new Set<string>();
        if (hovIdx >= 0) {
          const hovNode = data.nodes[hovIdx];
          for (const link of data.links) {
            const src = typeof link.source === 'object' ? link.source : null;
            const tgt = typeof link.target === 'object' ? link.target : null;
            if (src && tgt) {
              if ((src as any).id === hovNode.id) hoveredConnections.add((tgt as any).id);
              if ((tgt as any).id === hovNode.id) hoveredConnections.add((src as any).id);
            }
          }
        }

        // Draw links
        for (const link of data.links) {
          const src = link.source as GraphNode;
          const tgt = link.target as GraphNode;
          if (src.x == null || tgt.x == null) continue;

          const isHighlighted = hovIdx >= 0 && (
            (src as any).id === data.nodes[hovIdx]?.id ||
            (tgt as any).id === data.nodes[hovIdx]?.id
          );

          ctx.beginPath();
          ctx.moveTo(src.x, src.y!);
          ctx.lineTo(tgt.x, tgt.y!);
          ctx.strokeStyle = isHighlighted
            ? 'rgba(255, 255, 255, 0.4)'
            : 'rgba(255, 255, 255, 0.06)';
          ctx.lineWidth = isHighlighted ? 1.5 : 0.5;
          ctx.stroke();
        }

        // Draw nodes
        data.nodes.forEach((node, i) => {
          if (node.x == null || node.y == null) return;
          const r = getNodeRadius(node);
          const isHovered = i === hovIdx;
          const isConnected = hovIdx >= 0 && hoveredConnections.has(node.id);
          const dimmed = hovIdx >= 0 && !isHovered && !isConnected;

          // Glow
          if (isHovered || isConnected) {
            const gradient = ctx.createRadialGradient(node.x, node.y, r * 0.5, node.x, node.y, r * 3);
            gradient.addColorStop(0, node.color + '60');
            gradient.addColorStop(1, node.color + '00');
            ctx.beginPath();
            ctx.arc(node.x, node.y, r * 3, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
          }

          // Node circle
          ctx.beginPath();
          ctx.arc(node.x, node.y, isHovered ? r * 1.4 : r, 0, Math.PI * 2);
          ctx.fillStyle = dimmed ? node.color + '30' : node.color;
          ctx.fill();

          // Border
          ctx.strokeStyle = dimmed ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.2)';
          ctx.lineWidth = isHovered ? 2 : 0.5;
          ctx.stroke();

          // Label for hovered node
          if (isHovered) {
            ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, sans-serif';
            ctx.fillStyle = '#e6edf3';
            ctx.textAlign = 'center';
            ctx.fillText(node.title, node.x, node.y - r - 8);
          }
        });

        ctx.restore();

        animFrameRef.current = requestAnimationFrame(draw);
      };

      animFrameRef.current = requestAnimationFrame(draw);

      // Hit testing
      const hitTest = (clientX: number, clientY: number): number => {
        const rect = canvas.getBoundingClientRect();
        const {x: tx, y: ty, scale} = transformRef.current;
        const mx = (clientX - rect.left - tx) / scale;
        const my = (clientY - rect.top - ty) / scale;

        for (let i = data.nodes.length - 1; i >= 0; i--) {
          const node = data.nodes[i];
          if (node.x == null || node.y == null) continue;
          const r = getNodeRadius(node) * 1.5; // slightly larger hit area
          const dx = mx - node.x;
          const dy = my - node.y;
          if (dx * dx + dy * dy < r * r) return i;
        }
        return -1;
      };

      // Mouse events
      const onMouseMove = (e: MouseEvent) => {
        const drag = dragRef.current;

        if (drag.active && drag.isPan) {
          transformRef.current.x += e.clientX - drag.startX;
          transformRef.current.y += e.clientY - drag.startY;
          drag.startX = e.clientX;
          drag.startY = e.clientY;
          return;
        }

        if (drag.active && drag.nodeIndex >= 0) {
          const {x: tx, y: ty, scale} = transformRef.current;
          const rect = canvas.getBoundingClientRect();
          const node = data.nodes[drag.nodeIndex];
          node.x = (e.clientX - rect.left - tx) / scale;
          node.y = (e.clientY - rect.top - ty) / scale;
          (node as any).fx = node.x;
          (node as any).fy = node.y;
          simulation.alpha(0.3).restart();
          return;
        }

        const idx = hitTest(e.clientX, e.clientY);
        hoverRef.current = idx;
        canvas.style.cursor = idx >= 0 ? 'pointer' : 'grab';

        if (idx >= 0) {
          const node = data.nodes[idx];
          const rect = canvas.getBoundingClientRect();
          setTooltip({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            title: node.title,
            tags: node.tags,
            connections: node.connections,
          });
        } else {
          setTooltip(null);
        }
      };

      const onMouseDown = (e: MouseEvent) => {
        const idx = hitTest(e.clientX, e.clientY);
        if (idx >= 0) {
          dragRef.current = {active: true, nodeIndex: idx, startX: e.clientX, startY: e.clientY, isPan: false};
          const node = data.nodes[idx];
          (node as any).fx = node.x;
          (node as any).fy = node.y;
          simulation.alphaTarget(0.1).restart();
        } else {
          dragRef.current = {active: true, nodeIndex: -1, startX: e.clientX, startY: e.clientY, isPan: true};
        }
        canvas.style.cursor = idx >= 0 ? 'grabbing' : 'grabbing';
      };

      const onMouseUp = (e: MouseEvent) => {
        const drag = dragRef.current;
        if (drag.active && drag.nodeIndex >= 0) {
          const node = data.nodes[drag.nodeIndex];
          // If it was a click (not a drag), navigate
          const dx = e.clientX - drag.startX;
          const dy = e.clientY - drag.startY;
          if (Math.abs(dx) < 3 && Math.abs(dy) < 3) {
            history.push(`${baseUrl}${node.id}`);
          }
          (node as any).fx = null;
          (node as any).fy = null;
          simulation.alphaTarget(0);
        }
        dragRef.current = {active: false, nodeIndex: -1, startX: 0, startY: 0, isPan: false};
        canvas.style.cursor = 'grab';
      };

      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const {x: tx, y: ty, scale} = transformRef.current;

        const factor = e.deltaY > 0 ? 0.9 : 1.1;
        const newScale = Math.max(0.2, Math.min(5, scale * factor));

        transformRef.current = {
          x: mx - (mx - tx) * (newScale / scale),
          y: my - (my - ty) * (newScale / scale),
          scale: newScale,
        };
      };

      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mousedown', onMouseDown);
      canvas.addEventListener('mouseup', onMouseUp);
      canvas.addEventListener('mouseleave', () => {
        hoverRef.current = -1;
        setTooltip(null);
        const drag = dragRef.current;
        if (drag.active && drag.nodeIndex >= 0) {
          const node = data.nodes[drag.nodeIndex];
          (node as any).fx = null;
          (node as any).fy = null;
        }
        dragRef.current = {active: false, nodeIndex: -1, startX: 0, startY: 0, isPan: false};
      });
      canvas.addEventListener('wheel', onWheel, {passive: false});

      return () => {
        simulation.stop();
        cancelAnimationFrame(animFrameRef.current);
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('mousedown', onMouseDown);
        canvas.removeEventListener('mouseup', onMouseUp);
        canvas.removeEventListener('wheel', onWheel);
        window.removeEventListener('resize', resize);
      };
    });

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={`${styles.graphWrapper} ${isFullscreen ? styles.fullscreen : ''}`}>
      <div className={styles.graphHeader}>
        <h2>Mapa de Conexões</h2>
        <div className={styles.headerRight}>
          <span className={styles.graphHint}>
            {isFullscreen ? 'ESC para sair · ' : ''}Arraste para mover · Scroll para zoom · Clique para navegar
          </span>
          <button
            className={styles.fullscreenBtn}
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Sair do fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? '✕' : '⛶'}
          </button>
        </div>
      </div>
      <div ref={containerRef} className={styles.graphContainer}>
        <canvas ref={canvasRef} className={styles.graphCanvas} />
        {tooltip && (
          <div
            className={styles.tooltip}
            style={{left: tooltip.x + 12, top: tooltip.y - 10}}
          >
            <strong>{tooltip.title}</strong>
            {tooltip.tags.length > 0 && (
              <div className={styles.tooltipTags}>
                {tooltip.tags.map(t => (
                  <span key={t} className={styles.tooltipTag}>{t}</span>
                ))}
              </div>
            )}
            <div className={styles.tooltipMeta}>{tooltip.connections} conexões</div>
          </div>
        )}
      </div>
      <div className={styles.legend}>
        <span className={styles.legendTitle}>Top conexões:</span>
        {(graphData as any).legend?.map((item: {tag: string; color: string; count: number}) => (
          <span key={item.tag} className={styles.legendItem}>
            <span className={styles.dot} style={{background: item.color}} />
            {item.tag} ({item.count})
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ZettelGraph(): React.JSX.Element {
  return (
    <BrowserOnly fallback={<div className={styles.fallback}>Carregando grafo...</div>}>
      {() => <ZettelGraphCanvas />}
    </BrowserOnly>
  );
}
