import React from 'react';
import { FaGraduationCap, FaAws, FaSitemap } from 'react-icons/fa';
import { SiNeovim } from 'react-icons/si';
import styles from './styles.module.css';

type CardItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
};

const cards: CardItem[] = [
  {
    title: 'Tecnólogo PUC-MG',
    description: 'Graduação em Análise e Desenvolvimento de Sistemas',
    icon: <FaGraduationCap color="#007bff" />,
    link: 'puc/intro',
  },
  {
    title: 'AWS Skill Builder',
    description: 'Certificações e cursos AWS',
    icon: <FaAws color="#FF9900" />,
    link: 'category/aws-skill-builder',
  },
];

export default function MaterialCards(): JSX.Element {
  return (
    <div className={styles.grid}>
      {cards.map((card, idx) => (
        <a key={idx} href={card.link} className={styles.card}>
          <span className={styles.icon}>{card.icon}</span>
          <strong className={styles.title}>{card.title}</strong>
          <p className={styles.description}>{card.description}</p>
        </a>
      ))}
    </div>
  );
}
