import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const ZETTEL_DIR = join(process.cwd(), 'zettel');
const OUTPUT = join(process.cwd(), 'src', 'data', 'zettel-graph.json');

const HUB_MIN_CONNECTIONS = 5;

// Palette for hubs (visually distinct, galaxy-friendly)
const HUB_PALETTE = [
  '#63e6be', '#ff6b6b', '#6ea8fe', '#ffa94d', '#b07df0',
  '#22d3ee', '#ffe066', '#f472b6', '#a78bfa', '#c0caf5',
];
const DEFAULT_COLOR = '#7f8c9b';

async function buildGraph() {
  const files = await readdir(ZETTEL_DIR);
  const mdxFiles = files.filter(f => /^\d{12}\.mdx$/.test(f));

  const nodes = [];
  const links = [];
  const nodeIds = new Set();

  for (const file of mdxFiles) {
    const id = file.replace('.mdx', '');
    const content = await readFile(join(ZETTEL_DIR, file), 'utf-8');

    // Parse frontmatter
    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) continue;

    const fm = fmMatch[1];
    const titleMatch = fm.match(/^title:\s*"(.+)"/m);
    const tagsMatch = fm.match(/^tags:\s*\[(.*)]/m);

    const title = titleMatch ? titleMatch[1] : id;
    const tags = tagsMatch
      ? tagsMatch[1].split(',').map(t => t.trim()).filter(Boolean)
      : [];

    nodeIds.add(id);
    nodes.push({ id, title, tags });

    // Find all internal zettel links
    const linkRegex = /\/zettel\/(\d{12})/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      const targetId = match[1];
      if (targetId !== id) {
        links.push({ source: id, target: targetId });
      }
    }
  }

  // Deduplicate and validate links
  const seen = new Set();
  const validLinks = links.filter(l => {
    if (!nodeIds.has(l.source) || !nodeIds.has(l.target)) return false;
    const key = [l.source, l.target].sort().join('-');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Build adjacency list and count connections
  const neighbors = {};
  for (const node of nodes) neighbors[node.id] = new Set();
  for (const link of validLinks) {
    neighbors[link.source].add(link.target);
    neighbors[link.target].add(link.source);
  }
  for (const node of nodes) {
    node.connections = neighbors[node.id].size;
  }

  // Identify hubs: nodes with >= HUB_MIN_CONNECTIONS, sorted by connections desc
  const hubs = nodes
    .filter(n => n.connections >= HUB_MIN_CONNECTIONS)
    .sort((a, b) => b.connections - a.connections);

  // Assign a color to each hub
  const hubColorMap = {};
  hubs.forEach((hub, i) => {
    hubColorMap[hub.id] = HUB_PALETTE[i % HUB_PALETTE.length];
  });

  // Color each node: if it's a hub use its color,
  // otherwise inherit from the most-connected hub it links to
  for (const node of nodes) {
    if (hubColorMap[node.id]) {
      node.color = hubColorMap[node.id];
      continue;
    }

    // Find neighboring hubs, pick the one with most connections
    let bestHub = null;
    let bestConn = -1;
    for (const neighborId of neighbors[node.id]) {
      if (hubColorMap[neighborId]) {
        const neighborNode = nodes.find(n => n.id === neighborId);
        if (neighborNode && neighborNode.connections > bestConn) {
          bestConn = neighborNode.connections;
          bestHub = neighborId;
        }
      }
    }

    node.color = bestHub ? hubColorMap[bestHub] : DEFAULT_COLOR;
  }

  // Legend: top 5 hubs
  const legend = hubs.slice(0, 5).map(hub => ({
    tag: hub.title,
    color: hubColorMap[hub.id],
    count: hub.connections,
  }));

  const graph = { nodes, links: validLinks, legend };
  await writeFile(OUTPUT, JSON.stringify(graph, null, 2), 'utf-8');

  console.log(`Graph built: ${nodes.length} nodes, ${validLinks.length} links`);
  console.log(`Hubs (${hubs.length}): ${hubs.map(h => `${h.title}(${h.connections})`).join(', ')}`);
  console.log(`Legend: ${legend.map(l => `${l.tag}(${l.count})`).join(', ')}`);
  console.log(`Output: ${OUTPUT}`);
}

buildGraph().catch(console.error);
