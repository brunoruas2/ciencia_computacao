import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Aviso!',
    Svg: require('@site/static/img/desk-lamp-svgrepo-com.svg').default,
    description: (
      <>
        Esse é meu repositório público de conteúdos estudados ao longo da minha jornada de estudos. Nunca siga os conteúdos aqui como se fosse uma receita garantida. Sinta-se livre para estudar e compartilhar o que você aprendeu.
      </>
    ),
  },
  {
    title: 'Quem sou eu',
    Svg: require('@site/static/img/office-chair-svgrepo-com.svg').default,
    description: (
      <>
        Me chamo Bruno de Melo Ruas. Sou bacharel em Economia (UEA) e Analista de Sistemas (PUC-MG). Gosto muito de estudar e publicar meus aprendizados em sites para ajudar outras pessoas.
      </>
    ),
  },
  {
    title: 'Querendo aprender finanças?',
    Svg: require('@site/static/img/monitor-svgrepo-com.svg').default,
    description: (
      <>
        Se você tem interesse em aprender a investir, pode conferir <a href="https://brunoruas2.github.io/FIN_site/" target="_blank" rel="noopener noreferrer"><code>meu outro site</code></a>.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
