import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from './testmainpage.module.css';

const features = [
  {
    label: 'Topography',
    title: 'Understand the terrain before you go',
    text: 'Contour lines, hillshade, slope, altitude, and 3D relief help you plan outdoor routes with more confidence.',
    link: '/docs/user/plugins/topography',
  },
  {
    label: 'Navigation',
    title: 'Navigate offline anywhere',
    text: 'Use offline routing profiles for driving, cycling, walking, hiking, off-road trips, and more.',
    link: '/docs/user/navigation',
  },
  {
    label: 'Tracks',
    title: 'Record and manage every route',
    text: 'Record GPX tracks, import routes, edit them, analyze details, and keep your travel history organized.',
    link: '/docs/user/plugins/trip-recording',
  },
  {
    label: 'Search',
    title: 'Find places without internet',
    text: 'Search addresses, categories, POIs, coordinates, and saved places directly from offline maps.',
    link: '/docs/user/search',
  },
];

const stats = [
  ['Offline-first', 'Maps and navigation'],
  ['GPX', 'Tracks and route planning'],
  ['Android · iOS · Web', 'Cross-platform workflow'],
];

const platforms = [
  {
    title: 'Android',
    text: 'Offline maps, Android Auto, terrain, tracks, widgets, plugins, and advanced navigation profiles.',
    link: '/docs/versions/free-versions',
    button: 'Get OsmAnd for Android',
  },
  {
    title: 'iOS',
    text: 'Offline navigation, CarPlay, tracks, terrain, weather, Cloud sync, and route planning.',
    link: '/docs/versions/free-versions',
    button: 'Get OsmAnd for iOS',
  },
  {
    title: 'Web',
    text: 'Plan routes, manage tracks, organize favorites, and sync your data with OsmAnd Cloud.',
    link: 'pathname:///map',
    button: 'Open OsmAnd Web',
  },
];

const storeButtons = [
  {
    title: 'Huawei AppGallery',
    subtitle: 'Explore it on',
    icon: 'H',
    link: 'https://appgallery.huawei.com/#/app/C101486545',
  },
  {
    title: 'Google Play',
    subtitle: 'Get it on',
    icon: '▶',
    link: 'https://play.google.com/store/apps/details?id=net.osmand',
  },
  {
    title: 'App Store',
    subtitle: 'Download on the',
    icon: '',
    link: 'https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257',
  },
];

const footerLinks = [
  {
    title: 'OsmAnd',
    items: [
      { label: 'Pricing 💳', to: 'pathname:///pricing' },
      { label: 'Map 🌍', to: 'pathname:///map' },
      { label: 'Docs', to: '/docs/intro' },
      { label: 'Purchases', to: '/docs/user/purchases' },
      { label: 'Map legend', to: '/docs/user/map-legend/osmand' },
      { label: 'Downloads', to: '/docs/versions/free-versions' },
      { label: 'Build it', to: '/docs/build-it' },
      { label: 'Giveaway', to: '/giveaway' },
      { label: 'About', to: '/help-online/about' },
    ],
  },
  {
    title: 'Community',
    items: [
      { label: 'GitHub Discussions', href: 'https://github.com/osmandapp/OsmAnd/discussions' },
      { label: 'X (Twitter)', href: 'https://x.com/osmandapp' },
      { label: 'Reddit', href: 'https://www.reddit.com/r/OsmAnd/' },
      { label: 'Facebook', href: 'https://facebook.com/osmandapp/' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@osmandapp' },
      { label: 'Telegram Channel', href: 'https://t.me/OsmAnd_News' },
      { label: 'Matrix', href: 'https://matrix.to/#/#osmand:hacklab.fi' },
    ],
  },
  {
    title: 'Telegram chat',
    items: [
      { label: 'English', href: 'https://t.me/OsmAndMaps' },
      { label: 'French', href: 'https://t.me/frosmand' },
      { label: 'German', href: 'https://t.me/deosmand' },
      { label: 'Italian', href: 'https://t.me/itosmand' },
      { label: 'Ukrainian', href: 'https://t.me/uaosmand' },
      { label: 'Polish', href: 'https://t.me/osmand_pl' },
      { label: 'Spanish', href: 'https://t.me/osmand_es' },
      { label: 'Brazilian', href: 'https://t.me/brosmand' },
      { label: 'Arabic', href: 'https://t.me/+NwG00ihXJlBjZTA0' },
      { label: 'Türkçe', href: 'https://t.me/OsmAndTR' },
    ],
  },
  {
    title: 'More',
    items: [
      { label: 'Blog', to: '/blog' },
      { label: 'GitHub', href: 'https://github.com/osmandapp' },
      { label: 'OsmAnd CZ Manuals', href: 'https://osmand.cz/' },
      { label: 'Get OsmAnd Merchandise', href: 'https://www.redbubble.com/shop/ap/36789864' },
      { label: 'Support', to: '/help-online/support' },
    ],
  },
];

function FooterLink({ item }) {
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        {item.label}
      </a>
    );
  }

  return <Link to={item.to}>{item.label}</Link>;
}

export default function TestMainPage() {
  return (
    <Layout
      title="OsmAnd — Offline Maps and Navigation"
      description="Offline maps, navigation, topography, GPX tracks, Cloud sync, and privacy-first tools for every trip."
      noFooter
    >
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>Offline maps & navigation</p>

            <h1>
              Your map for
              <br />
              every adventure
            </h1>

            <p className={styles.heroDescription}>
              Plan routes, navigate offline, explore terrain, record tracks,
              and keep your location data private with OsmAnd.
            </p>

            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} to="/docs/versions/free-versions">
                Download OsmAnd
              </Link>

              <Link className={styles.secondaryButton} to="pathname:///map">
                Open Web Map
              </Link>
            </div>

            <div className={styles.storeRow}>
              {storeButtons.map((store) => (
                <a
                  className={styles.storeBadge}
                  href={store.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={store.title}
                >
                  <span className={styles.storeIcon}>{store.icon}</span>
                  <span>
                    <small>{store.subtitle}</small>
                    <strong>{store.title}</strong>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.phone}>
              <div className={styles.phoneMap}>
                <div className={styles.route} />
                <div className={styles.markerA} />
                <div className={styles.markerB} />
                <div className={styles.mapLabelOne}>Offline route</div>
                <div className={styles.mapLabelTwo}>Hillshade</div>
              </div>

              <div className={styles.routePanel}>
                <div>
                  <strong>Mountain route</strong>
                  <span>Ready offline</span>
                </div>
                <b>28.4 km</b>
              </div>
            </div>

            <div className={styles.floatCardOne}>
              <strong>3D Relief</strong>
              <span>Terrain data ready</span>
            </div>

            <div className={styles.floatCardTwo}>
              <strong>GPX Track</strong>
              <span>Recording active</span>
            </div>
          </div>
        </section>

        <section className={styles.statSection}>
          {stats.map(([value, label]) => (
            <article key={value} className={styles.statCard}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section className={styles.introSection}>
          <p className={styles.kicker}>Everything works offline</p>
          <h2>Built for travel, hiking, cycling, driving, and exploration</h2>
          <p>
            OsmAnd gives you detailed maps, flexible navigation profiles,
            topographic tools, track recording, and cross-device sync in one app.
          </p>
        </section>

        <section className={styles.featureGrid}>
          {features.map((feature) => (
            <article className={styles.featureCard} key={feature.title}>
              <div className={styles.featureVisual}>
                <div className={styles.miniMap}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <p className={styles.featureLabel}>{feature.label}</p>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>

              <Link to={feature.link}>
                Learn more
                <span>→</span>
              </Link>
            </article>
          ))}
        </section>

        <section className={styles.carSection}>
          <div>
            <p className={styles.kicker}>CarPlay & Android Auto</p>
            <h2>Navigate from your car dashboard</h2>
            <p>
              Start navigation on your phone and use OsmAnd on compatible
              in-car screens with a simplified interface for safer driving.
            </p>

            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} to="/docs/user/navigation">
                CarPlay
              </Link>
              <Link className={styles.secondaryButton} to="/docs/user/navigation">
                Android Auto
              </Link>
            </div>
          </div>

          <div className={styles.dashboardMockup}>
            <div className={styles.dashboardScreen}>
              <div className={styles.dashboardRoute} />
              <div className={styles.dashboardPanel}>
                <strong>Turn right</strong>
                <span>350 m</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cloudSection}>
          <div className={styles.cloudVisual}>
            <div className={styles.deviceOne} />
            <div className={styles.cloudBubble}>☁</div>
            <div className={styles.deviceTwo} />
          </div>

          <div>
            <p className={styles.kicker}>OsmAnd Cloud</p>
            <h2>Stay connected across your devices</h2>
            <p>
              Sync favorites, tracks, profile settings, backups, and web-planned
              routes between Android, iOS, and OsmAnd Web.
            </p>

            <Link className={styles.primaryButton} to="/docs/user/personal/osmand-cloud">
              Explore Cloud Sync
            </Link>
          </div>
        </section>

        <section className={styles.platformSection}>
          <div className={styles.introSection}>
            <p className={styles.kicker}>Download OsmAnd</p>
            <h2>One navigation ecosystem</h2>
            <p>
              Use OsmAnd on mobile and web, then keep your routes, favorites,
              and tracks available where you need them.
            </p>
          </div>

          <div className={styles.platformGrid}>
            {platforms.map((platform) => (
              <article className={styles.platformCard} key={platform.title}>
                <h3>{platform.title}</h3>
                <p>{platform.text}</p>
                <div className={styles.platformMockup} />
                <Link to={platform.link}>{platform.button}</Link>
              </article>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <Link className={styles.footerLogo} to="/">
                <img
                  className={styles.footerLogoImage}
                  src="/img/logo.svg"
                  alt="OsmAnd Logo"
                />
                <span>OsmAnd</span>
              </Link>

              <p>
                Offline maps, navigation, GPX tracks, terrain, and privacy-first
                tools for every adventure.
              </p>
            </div>

            <div className={styles.footerColumns}>
              {footerLinks.map((section) => (
                <div className={styles.footerColumn} key={section.title}>
                  <h3>{section.title}</h3>

                  <ul>
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <FooterLink item={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className={styles.footerBottom}>
              <p>Copyright © {new Date().getFullYear()} OsmAnd BV.</p>

              <div>
                <Link to="/docs/user/purchases">Purchases</Link>
                <Link to="/help-online/support">Support</Link>
                <Link to="/docs/intro">Docs</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </Layout>
  );
}