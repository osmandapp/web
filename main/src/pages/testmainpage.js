import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import GPlay from '@site/src/components/buttons/GPlay.mdx';
import Huawei from '@site/src/components/buttons/Huawei.mdx';

import styles from './testmainpage.module.css';

const androidFeatureSlides = [
  {
    label: 'Offline Maps',
    title: 'Detailed offline maps',
    text: 'Download detailed maps before your trip and use them without mobile data.',
    link: '/docs/versions/free-versions',
    button: 'Explore offline maps',
    badge: 'Android',
    metric: 'Offline maps',
    image: '/img/promo/promo-1s.png',
    imageAlt: 'OsmAnd Android offline maps screenshot',
  },
  {
    label: 'Navigation',
    title: 'Turn-by-turn navigation',
    text: 'Navigate with flexible routing profiles for driving, cycling, walking, hiking, and more.',
    link: '/docs/user/navigation',
    button: 'Explore navigation',
    badge: 'Android',
    metric: 'Turn-by-turn',
    image: '/img/promo/promo-2s.png',
    imageAlt: 'OsmAnd Android navigation screenshot',
  },
  {
    label: 'Topography',
    title: 'Terrain and relief tools',
    text: 'Use contour lines, hillshade, slope, altitude, and terrain tools for outdoor planning.',
    link: '/docs/user/plugins/topography',
    button: 'Explore topography',
    badge: 'Android',
    metric: 'Terrain',
    image: '/img/promo/promo-3s.png',
    imageAlt: 'OsmAnd Android topography screenshot',
  },
  {
    label: 'Tracks',
    title: 'GPX tracks and routes',
    text: 'Record, import, edit, and analyze GPX tracks for every trip.',
    link: '/docs/user/plugins/trip-recording',
    button: 'Explore tracks',
    badge: 'Android',
    metric: 'GPX',
    image: '/img/promo/promo-4s.png',
    imageAlt: 'OsmAnd Android tracks screenshot',
  },
  {
    label: 'Search',
    title: 'Find places offline',
    text: 'Search addresses, POIs, categories, coordinates, and saved places from offline maps.',
    link: '/docs/user/search',
    button: 'Explore search',
    badge: 'Android',
    metric: 'Offline search',
    image: '/img/promo/promo-5s.png',
    imageAlt: 'OsmAnd Android search screenshot',
  },
  {
    label: 'Map Layers',
    title: 'Customize your map view',
    text: 'Combine map styles, overlays, underlays, terrain, weather, and other layers.',
    link: '/docs/user/map',
    button: 'Explore map layers',
    badge: 'Android',
    metric: 'Map layers',
    image: '/img/promo/promo-6s.png',
    imageAlt: 'OsmAnd Android map layers screenshot',
  },
  {
    label: 'Trip Tools',
    title: 'Tools for every adventure',
    text: 'Use widgets, navigation settings, map controls, and profile-based tools for each activity.',
    link: '/docs/user/widgets',
    button: 'Explore widgets',
    badge: 'Android',
    metric: 'Toolkit',
    image: '/img/promo/promo-7s.png',
    imageAlt: 'OsmAnd Android tools screenshot',
  },
  {
    label: 'Cloud Sync',
    title: 'Sync your data everywhere',
    text: 'Keep favorites, tracks, backups, and profile settings available across your devices.',
    link: '/docs/user/personal/osmand-cloud',
    button: 'Explore Cloud Sync',
    badge: 'Android',
    metric: 'Cloud',
    image: '/img/promo/promo-8s.png',
    imageAlt: 'OsmAnd Android Cloud screenshot',
  },
  {
    label: 'Weather',
    title: 'Offline weather data',
    text: 'Plan ahead with weather layers and forecast data available on the map.',
    link: '/docs/user/plugins/weather',
    button: 'Explore weather',
    badge: 'Android',
    metric: 'Weather',
    image: '/img/promo/promo-9s.png',
    imageAlt: 'OsmAnd Android weather screenshot',
  },
  {
    label: 'Profiles',
    title: 'Profiles for every activity',
    text: 'Switch between driving, cycling, walking, hiking, off-road, and custom navigation profiles.',
    link: '/docs/user/personal/profiles',
    button: 'Explore profiles',
    badge: 'Android',
    metric: 'Profiles',
    image: '/img/promo/promo-10s.png',
    imageAlt: 'OsmAnd Android profiles screenshot',
  },
];

const iosFeatureSlides = [
  {
    label: 'Offline Maps',
    title: 'Offline maps on iPhone',
    text: 'Use detailed offline maps and navigation tools directly on iPhone and iPad.',
    link: '/docs/versions/free-versions',
    button: 'Explore iOS app',
    badge: 'iOS',
    metric: 'Offline maps',
    image: '/img/promo/ios-1s.png',
    imageAlt: 'OsmAnd iOS offline maps screenshot',
  },
  {
    label: 'Navigation',
    title: 'Navigation on iOS',
    text: 'Plan routes and navigate with OsmAnd on iPhone and iPad.',
    link: '/docs/user/navigation',
    button: 'Explore navigation',
    badge: 'iOS',
    metric: 'Navigation',
    image: '/img/promo/ios-2s.png',
    imageAlt: 'OsmAnd iOS navigation screenshot',
  },
  {
    label: 'Topography',
    title: 'Terrain tools on iOS',
    text: 'Use outdoor map details, terrain data, and topographic tools for trip planning.',
    link: '/docs/user/plugins/topography',
    button: 'Explore topography',
    badge: 'iOS',
    metric: 'Terrain',
    image: '/img/promo/ios-3s.png',
    imageAlt: 'OsmAnd iOS terrain screenshot',
  },
  {
    label: 'Tracks',
    title: 'Tracks and route planning',
    text: 'Record, import, organize, and analyze your GPX tracks on iOS.',
    link: '/docs/user/plugins/trip-recording',
    button: 'Explore tracks',
    badge: 'iOS',
    metric: 'GPX',
    image: '/img/promo/ios-4s.png',
    imageAlt: 'OsmAnd iOS tracks screenshot',
  },
  {
    label: 'Search',
    title: 'Search places offline',
    text: 'Find places, addresses, categories, coordinates, and favorites without internet.',
    link: '/docs/user/search',
    button: 'Explore search',
    badge: 'iOS',
    metric: 'Search',
    image: '/img/promo/ios-5s.png',
    imageAlt: 'OsmAnd iOS search screenshot',
  },
  {
    label: 'Map Layers',
    title: 'Map layers and overlays',
    text: 'Customize the map with layers, overlays, terrain, weather, and activity-specific details.',
    link: '/docs/user/map',
    button: 'Explore map layers',
    badge: 'iOS',
    metric: 'Layers',
    image: '/img/promo/ios-6s.png',
    imageAlt: 'OsmAnd iOS map layers screenshot',
  },
  {
    label: 'Trip Tools',
    title: 'Advanced trip tools',
    text: 'Use map widgets, route tools, measurements, and profile settings for different activities.',
    link: '/docs/user/widgets',
    button: 'Explore widgets',
    badge: 'iOS',
    metric: 'Toolkit',
    image: '/img/promo/ios-7s.png',
    imageAlt: 'OsmAnd iOS tools screenshot',
  },
  {
    label: 'Cloud Sync',
    title: 'OsmAnd Cloud on iOS',
    text: 'Sync favorites, tracks, backups, profile settings, and web-planned routes.',
    link: '/docs/user/personal/osmand-cloud',
    button: 'Explore Cloud Sync',
    badge: 'iOS',
    metric: 'Cloud',
    image: '/img/promo/ios-8s.png',
    imageAlt: 'OsmAnd iOS Cloud screenshot',
  },
  {
    label: 'Weather',
    title: 'Weather on the map',
    text: 'Check weather data and map layers to plan safer outdoor routes.',
    link: '/docs/user/plugins/weather',
    button: 'Explore weather',
    badge: 'iOS',
    metric: 'Weather',
    image: '/img/promo/ios-9s.png',
    imageAlt: 'OsmAnd iOS weather screenshot',
  },
  {
    label: 'Profiles',
    title: 'Navigation profiles on iOS',
    text: 'Use dedicated profiles for driving, cycling, walking, hiking, and custom navigation.',
    link: '/docs/user/personal/profiles',
    button: 'Explore profiles',
    badge: 'iOS',
    metric: 'Profiles',
    image: '/img/promo/ios-10s.png',
    imageAlt: 'OsmAnd iOS profiles screenshot',
  },
];

const stats = [
  ['Offline-first', 'Maps and navigation'],
  ['GPX', 'Tracks and route planning'],
  ['Android · iOS · Web', 'Cross-platform workflow'],
];

const heroCards = [
  {
    title: 'Detailed Offline Maps',
    text: 'Ready anywhere',
  },
  {
    title: '3D Reliefs',
    text: 'Terrain data ready',
  },
  {
    title: 'GPX Tracks',
    text: 'Plan, record, share',
  },
  {
    title: 'Multi-Tool Kit',
    text: 'For every adventure',
  },
];

const trustCards = [
  {
    icon: '✓',
    title: 'No Ads',
    text: 'A clean map experience with no advertising and no distractions.',
  },
  {
    icon: '⌁',
    title: 'Full Privacy',
    text: 'Your personal location data is not tracked, shared, or sold.',
  },
  {
    icon: '＋',
    title: 'All-in-One Toolkit',
    text: 'Offline maps, navigation, tracks, terrain, and trip tools in one app.',
  },
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

export default function TestMainPage() {
  const [activePlatform, setActivePlatform] = useState('android');
  const [activeFeature, setActiveFeature] = useState(0);
  const [isFeaturePaused, setIsFeaturePaused] = useState(false);

  const featureSlides =
    activePlatform === 'ios' ? iosFeatureSlides : androidFeatureSlides;

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const userAgent = window.navigator.userAgent || '';
    const platform = window.navigator.platform || '';
    const maxTouchPoints = window.navigator.maxTouchPoints || 0;

    const isIOS =
      /iPad|iPhone|iPod/.test(userAgent) ||
      (platform === 'MacIntel' && maxTouchPoints > 1);

    setActivePlatform(isIOS ? 'ios' : 'android');
  }, []);

  useEffect(() => {
    setActiveFeature(0);
  }, [activePlatform]);

  useEffect(() => {
    if (isFeaturePaused) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveFeature((current) => (current + 1) % featureSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isFeaturePaused, featureSlides.length]);

  const activeFeatureSlide = featureSlides[activeFeature];

  const previousFeature = () => {
    setActiveFeature((current) =>
      current === 0 ? featureSlides.length - 1 : current - 1,
    );
  };

  const nextFeature = () => {
    setActiveFeature((current) => (current + 1) % featureSlides.length);
  };

  return (
    <Layout
      title="OsmAnd — Offline Maps and Navigation"
      description="Offline maps, navigation, topography, GPX tracks, Cloud sync, and privacy-first tools for every trip."
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
              <div className={styles.storeItem}>
                <Huawei />
              </div>

              <div className={styles.storeItem}>
                <GPlay />
              </div>

              <div className={styles.storeItem}>
                <AppleStore />
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.phoneScreenshotWrap}>
              <img
                className={`${styles.phoneScreenshot} ${styles.phoneScreenshotLight}`}
                src="/img/test-main/screen-android.png"
                alt=""
              />

              <img
                className={`${styles.phoneScreenshot} ${styles.phoneScreenshotDark}`}
                src="/img/test-main/screen-android-black.png"
                alt=""
              />
            </div>

            {heroCards.map((card, index) => (
              <div
                className={`${styles.floatCard} ${styles[`heroCard${index + 1}`]}`}
                key={card.title}
              >
                <strong>{card.title}</strong>
                <span>{card.text}</span>
              </div>
            ))}
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

        <section className={styles.trustSection}>
          {trustCards.map((card) => (
            <article className={styles.trustCard} key={card.title}>
              <span className={styles.trustIcon}>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section
          className={styles.magicFeatureSection}
          onMouseEnter={() => setIsFeaturePaused(true)}
          onMouseLeave={() => setIsFeaturePaused(false)}
          onFocus={() => setIsFeaturePaused(true)}
          onBlur={() => setIsFeaturePaused(false)}
        >
          <div className={styles.magicFeatureHeader}>
            <h2>Powerful navigation tools for every adventure</h2>
            <p>
              Explore offline maps, flexible routing, terrain tools, GPX tracks,
              and Cloud sync in one privacy-first app.
            </p>

            <div className={styles.platformSwitch} role="tablist" aria-label="Platform">
              <button
                type="button"
                className={`${styles.platformSwitchButton} ${
                  activePlatform === 'android'
                    ? styles.platformSwitchButtonActive
                    : ''
                }`}
                aria-pressed={activePlatform === 'android'}
                onClick={() => setActivePlatform('android')}
              >
                Android
              </button>

              <button
                type="button"
                className={`${styles.platformSwitchButton} ${
                  activePlatform === 'ios'
                    ? styles.platformSwitchButtonActive
                    : ''
                }`}
                aria-pressed={activePlatform === 'ios'}
                onClick={() => setActivePlatform('ios')}
              >
                iOS
              </button>
            </div>
          </div>

          <div className={styles.magicFeatureCarousel}>
            <div className={styles.magicFeatureVisual}>
              <div className={styles.magicFeatureGlow} />

              <img
                className={styles.magicFeatureImage}
                src={activeFeatureSlide.image}
                alt={activeFeatureSlide.imageAlt}
                key={activeFeatureSlide.image}
              />

              <div className={styles.magicFeatureMiniCard}>
                <strong>{activeFeatureSlide.badge}</strong>
                <span>{activeFeatureSlide.metric}</span>
              </div>
            </div>

            <div className={styles.magicFeatureCopy} aria-live="polite">
              <h3>{activeFeatureSlide.title}</h3>
              <p>{activeFeatureSlide.text}</p>

              <Link className={styles.featureLink} to={activeFeatureSlide.link}>
                {activeFeatureSlide.button}
                <span>→</span>
              </Link>

              <div className={styles.magicFeatureControls}>
                <button
                  type="button"
                  className={styles.magicFeatureArrow}
                  aria-label="Previous feature"
                  onClick={previousFeature}
                >
                  ‹
                </button>

                <button
                  type="button"
                  className={styles.magicFeatureArrow}
                  aria-label="Next feature"
                  onClick={nextFeature}
                >
                  ›
                </button>
              </div>

              <div className={styles.magicFeatureDots}>
                {featureSlides.map((slide, index) => {
                  const isActive = index === activeFeature;

                  return (
                    <button
                      type="button"
                      key={slide.label}
                      className={`${styles.magicFeatureDot} ${
                        isActive ? styles.magicFeatureDotActive : ''
                      }`}
                      aria-label={`Show ${slide.label}`}
                      aria-pressed={isActive}
                      onClick={() => setActiveFeature(index)}
                    >
                      <span />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
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

          <div className={styles.carImageWrap}>
            <img
              className={`${styles.carImage} ${styles.carImageLight}`}
              src="/img/test-main/carplay-main.png"
              alt="OsmAnd navigation on a car dashboard"
            />

            <img
              className={`${styles.carImage} ${styles.carImageDark}`}
              src="/img/test-main/carplay-main-black.png"
              alt=""
            />
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
      </main>
    </Layout>
  );
}