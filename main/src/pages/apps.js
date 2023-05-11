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
      <script>
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1141023373959636');
        fbq('track', 'PageView');`}
        </script>
        <noscript>
          <img height="1" width="1" style={{display: "none"}}
            src={`https://www.facebook.com/tr?id=1141023373959636&ev=PageView&noscript=1`} />
        </noscript>    
      </main>
    </Layout>
);
}

