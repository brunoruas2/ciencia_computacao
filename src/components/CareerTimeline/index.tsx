import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiRstudioide, SiPython } from 'react-icons/si';
import { AiFillBank, AiFillThunderbolt, AiFillHdd } from 'react-icons/ai';
import { FaAws } from 'react-icons/fa';

const elementStyle = {
  contentStyle: {
    background: '#e6e8e6',
    color: '#000',
    borderTop: '4px solid #007bff',
  },
  contentArrowStyle: { borderRight: '7px solid #e6e8e6' },
  iconStyle: { background: '#007bff', color: '#e6e8e6' },
};

function StackGrid({ columns, stacks }: { columns: number; stacks: string[][] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '10px',
      }}
    >
      {stacks.map((items, i) => (
        <ul key={i}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function CareerTimeline(): JSX.Element {
  return (
    <VerticalTimeline layout="1-column-left" lineColor="#e6e8e6">
      {/* BTG Pactual - Tech Lead */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        {...elementStyle}
        date="2025 - Atualmente"
        shadowSize="large"
        icon={<AiFillHdd />}
      >
        <h2> IT Analyst/Tech Lead </h2>
        <h3> Btg Pactual</h3>
        <h4> Rio de Janeiro (Remote) </h4>
        Atividades:
        <ul>
          <li>Refinamento de demandas</li>
          <li>GTs de priorização de entregas</li>
          <li>Alinhamento com Stakeholders estratégicos</li>
          <li>Entrega de projeto FATCA</li>
          <li>Alocado no maior banco de investimento da LATAM</li>
          <li>Tech Lead na squad de Integrations</li>
        </ul>
        Stack:
        <StackGrid
          columns={3}
          stacks={[
            ['C# / .NET', 'Python', 'Go', 'Javascript / Typescript', 'SQL / NoSQL'],
            ['CI/CD', 'Git', 'AWS', 'Angular', 'React'],
            ['RabbitMq', 'Redis', 'Kubernetes', 'NodeJs', 'Testes Unitários'],
          ]}
        />
      </VerticalTimelineElement>

      {/* GFT - Backend Dev */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        {...elementStyle}
        date="2023 - 2025"
        shadowSize="large"
        icon={<AiFillHdd />}
      >
        <h2> Desenvolvedor Backend </h2>
        <h3> GFT Tech - Time Btg Pactual</h3>
        <h4> São Paulo (Remote) </h4>
        Atividades:
        <ul>
          <li>Alocado no maior banco de investimento da LATAM</li>
          <li>Sustentação</li>
          <li>Projetos</li>
          <li>Evolução Tecnológica</li>
          <li>Regulatório</li>
        </ul>
        Stack:
        <StackGrid
          columns={3}
          stacks={[
            ['C# / .NET', 'Python', 'Go', 'Javascript / Typescript', 'SQL / NoSQL'],
            ['CI/CD', 'Git', 'AWS', 'Angular', 'React'],
            ['RabbitMq', 'Redis', 'Kubernetes', 'NodeJs', 'Testes Unitários'],
          ]}
        />
      </VerticalTimelineElement>

      {/* AWS Certification */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        {...elementStyle}
        date="2024"
        shadowSize="large"
        icon={<FaAws />}
      >
        <h2> Certificação Cloud Pratictioner </h2>
        <h3> AWS </h3>
      </VerticalTimelineElement>

      {/* PUC-MG */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        {...elementStyle}
        date="2022 - 2024"
        shadowSize="large"
        icon={<AiFillBank />}
      >
        <h2> Tecnólogo em Análise e Desenvolvimento de Sistemas </h2>
        <h3> Pontifícia Universidade Católica - PUC/MG </h3>
        Competências:
        <ul>
          <li>Boas práticas (SOLID / Clean Code)</li>
          <li>Desenvolvimento Fullstack .NET/React</li>
          <li>Desenvolvimento Mobile React Native</li>
          <li>Sistemas distribuídos</li>
          <li>Engenharia de Software</li>
        </ul>
      </VerticalTimelineElement>

      {/* Freelancer */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        {...elementStyle}
        date="2022 - 2023"
        shadowSize="large"
        icon={<AiFillThunderbolt />}
      >
        <h2> Desenvolvedor Freelancer </h2>
        <h3> Ruas Data Analysis </h3>
        <h4> Amazonas </h4>
        Atividades:
        <ul>
          <li>Auxílio à gestão de clínicas com KPIs</li>
          <li>Webapp com indicadores de gestão</li>
          <li>Construção de Rotinas RPA</li>
          <li>ETL com diferente sistemas</li>
        </ul>
        Stack:
        <StackGrid
          columns={2}
          stacks={[
            ['Python', 'Django', 'Selenium', 'HTML', 'CSS'],
            ['Javascript', 'Git/Github', 'Firebird', 'SQL', 'Tkinter'],
          ]}
        />
      </VerticalTimelineElement>

      {/* One Clinic */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        {...elementStyle}
        date="2020 - 2022"
        shadowSize="large"
        icon={<SiPython />}
      >
        <h2> Desenvolvedor Python / Sysadmin </h2>
        <h3> One Clinic </h3>
        <h4> Amazonas </h4>
        Atividades:
        <ul>
          <li>Integrações SOAP/REST com o ERP Totvs RM</li>
          <li>Webapp com indicadores de gestão</li>
          <li>Construção de Rotinas RPA</li>
          <li>Webapp para download de laudos</li>
        </ul>
        Stack:
        <StackGrid
          columns={2}
          stacks={[
            ['Python', 'Django', 'Selenium', 'HTML', 'CSS'],
            ['Javascript', 'Git/Github', 'Firebird', 'SQL'],
          ]}
        />
      </VerticalTimelineElement>

      {/* FGV */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        {...elementStyle}
        date="2019 - 2020"
        shadowSize="large"
        icon={<AiFillBank />}
      >
        <h2> Especialista em Gestão Financeira </h2>
        <h3> Fundação Getúlio Vargas - FGV </h3>
        Competências:
        <ul>
          <li>Análise de Demonstrações Contábeis</li>
          <li>Controladoria</li>
          <li>Projetos Econômicos e Financeiros</li>
        </ul>
      </VerticalTimelineElement>

      {/* SEMSA */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        {...elementStyle}
        date="2017 - 2020"
        shadowSize="large"
        icon={<SiRstudioide />}
      >
        <h2> Gerente de Orçamento </h2>
        <h3> Secretaria Municipal de Saúde - SEMSA </h3>
        <h4> Amazonas </h4>
        Atividades:
        <ul>
          <li>Criação de Webapp de acompanhamento de pagamentos</li>
          <li>Criação de Webapp georeferenciado de indicadores de produção</li>
          <li>Construção de Rotinas RPA</li>
        </ul>
        Stack:
        <ul>
          <li>Python</li>
          <li>R</li>
          <li>Selenium</li>
          <li>Shiny</li>
        </ul>
      </VerticalTimelineElement>

      {/* UEA */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        {...elementStyle}
        date="2014 - 2017"
        shadowSize="large"
        icon={<AiFillBank />}
      >
        <h2> Bacharel em Economia </h2>
        <h3> Universidade do Estado do Amazonas - UEA </h3>
        <h4> Manaus/Amazonas/Brasil </h4>
        Atividades:
        <ul>
          <li>Pesquisador Discente</li>
          <li>
            Monitorias
            <ul>
              <li>Introdução à Economia</li>
              <li>Macroeconomia I</li>
              <li>Econometria</li>
            </ul>
          </li>
          <li>3º colocado nacional na Gincana de Economia - COFECON</li>
        </ul>
        Stack:
        <ul>
          <li>Stata</li>
          <li>Eviews</li>
          <li>R/Rstudio</li>
        </ul>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
