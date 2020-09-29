import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Fast algorithms',
    imageUrl: 'img/2dpolys.svg',
    description: (
      <>
        CYT includes fast algorithms to handle and triangulate 4D reflexive polytopes and obtain the data of the associated CY hypersurface.
      </>
    ),
  },
  {
    title: 'Powerful and robust',
    imageUrl: 'img/regular.svg',
    description: (
      <>
        CYT can be used to explore the entirety of the Kreuzer-Skarke database, even at large Hodge numbers that were previously impractical.
      </>
    ),
  },
  {
    title: 'Easy to use',
    imageUrl: 'img/secfan.svg',
    description: (
      <>
        CYT is easy to install and use. We provide extensive documentation and all the code is open-source.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} Home`}
      description="A software package for analyzing Calabi-Yau hypersurfaces in toric varieties.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="text--center">
            <img className={styles.titleImage} src={useBaseUrl(siteConfig.customFields.titleImage)} alt={siteConfig.title} />
          </div>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
