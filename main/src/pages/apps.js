import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import AllStores from '../components/buttons/AllStores.mdx';
import Features from '../components/home/Features';
import Poll from '../components/home/Poll';
import Layout2Blocks from '../components/home/Layout2Blocks';
import Twitter from '../components/home/Twitter';
import Screenshots from '../components/home/Screenshots';
import Impressions from '../components/home/Impressions';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="margin-vert--xl">
          <AllStores />
        </div>
      </div>
    </header>
  );
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Cycling">
      <HomepageHeader />
      <main>

        

        
      </main>
    </Layout>
);
}

