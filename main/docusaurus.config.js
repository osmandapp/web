// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const defaultLocale = 'en';

async function createConfig(){
  const useRspackBundler = process.env.USE_RSPACK_BUNDLER === 'true';
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;

  // webpack-threads = 5GB / 1x speed
  // webpack+threads = 6GB / 1.25x speed (default)
  // rspack-threads = 40GB / 1.5x speed
  // rspack+threads = 44GB / 2x speed -- the best but RAM-demanding

  const optimizations = {
    v4: {
      removeLegacyPostBuildHeadAttribute: true, // required for ssgWorkerThreads
    },
    experimental_faster: {
      ssgWorkerThreads: true, // use Worker Thread Pool implementation
      rspackBundler: useRspackBundler, // use rspack instead of webpack
      rspackPersistentCache: useRspackBundler, // enable cache for rebuilds
    }
  };

  return {
    future: optimizations,
    title: 'OsmAnd',
    tagline: 'Offline Maps and Navigation',
    url: 'https://osmand.net',
    baseUrl: '/',
    onBrokenLinks: currentLocale === defaultLocale ? 'throw' : 'ignore',
    onBrokenAnchors: currentLocale === defaultLocale ? 'warn' : 'ignore',
    favicon: 'img/favicon.ico',
    organizationName: 'osmandapp', // Usually your GitHub org/user name.
    projectName: 'web', // Usually your repo name.
    staticDirectories: ['static', 'legacy-image-static'],
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ar', 'de', 'es', 'fr', 'it', 'pl', 'pt', 'tr', 'uk'],
      localeConfigs: {
        en: { label: 'English' },
        ar: { label: 'العربية', direction: 'rtl', htmlLang: 'ar' },
        de: { label: 'Deutsch' },
        es: { label: 'Español' },
        fr: { label: 'Français' },
        it: { label: 'Italiano' },
        pl: { label: 'Polski' },
        pt: { label: 'Português' },
        tr: { label: 'Türkçe' },
        uk: { label: 'Українська' },
      },
    },
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl: 'https://github.com/osmandapp/web/edit/main/main/',
            sidebarItemsGenerator: require('./scripts/help-structure-generator.js'),
          },
          blog: {
            showReadingTime: true,
            editUrl: 'https://github.com/osmandapp/web/edit/main/main/',
            blogSidebarTitle: 'All posts',
            blogSidebarCount: 'ALL',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    plugins: [
      [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/user/map/track-context-menu', // old
            to: '/docs/user/map/tracks/track-context-menu', // new
          },
          {
            from: '/docs/user/navigation/route-navigation',
            to: '/docs/user/navigation/setup/route-navigation',
          },
          {
            from: '/docs/user/map/tracks-on-map',
            to: '/docs/user/map/tracks',
          },
          {
            from: '/docs/user/plugins/contour-lines',
            to: '/docs/user/plugins/topography',
          },
          {
            from: '/docs/user/personal/maps',
            to: '/docs/user/personal/maps-resources',
          },
        ],
      },
    ]],
    themes: [
    [
        require.resolve('@easyops-cn/docusaurus-search-local'),
        /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
        {
          hashed: true,                        // long-term cache-friendly
          language: ['en', 'ru'],
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
        },
      ],
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'OsmAnd',
          logo: {
            alt: 'OsmAnd Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'localeDropdown',
              position: 'right',
            },
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Docs',
            },
            { to: '/blog', label: 'Blog', position: 'left'},
            { to: 'pathname:///pricing', label: '💳 Pricing', position: 'left' },
            { to: 'pathname:///map', target: '_self', label: '🌍 Map', position: 'left' },
            { to: '/docs/hiring', label: '🚵‍♂️ Join us', position: 'left' },
            {
              href: 'https://github.com/osmandapp/',
              label: 'GitHub',
              position: 'right',
            },
            { type: 'search', position: 'right' },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'OsmAnd',
              items: [
                {
                  label: 'Pricing 💳',
                  to: 'pathname:///pricing',
                },
                {
                  label: 'Map 🌍',
                  to: 'pathname:///map',
                  target: '_self',
                },
                {
                  label: 'Docs',
                  to: '/docs/intro',
                },
                {
                  label: 'Purchases',
                  to: '/docs/user/purchases',
                },
                {
                  label: 'Map legend',
                  to: '/docs/user/map-legend/osmand',
                },
                {
                  label: 'Downloads',
                  to: '/docs/versions/free-versions',
                },
                {
                  label: 'Build it',
                  to: '/docs/build-it',
                },

                {
                  label: 'Giveaway',
                  to: '/giveaway',
                },
                {
                  label: 'About',
                  to: '/help-online/about',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'GitHub Discussions',
                  href: 'https://github.com/osmandapp/OsmAnd/discussions',
                },
                {
                  label: 'Twitter',
                  href: 'https://x.com/osmandapp',
                },
                {
                  label: 'Reddit',
                  href: 'https://www.reddit.com/r/OsmAnd/',
                },
                {
                  label: 'Facebook',
                  href: 'https://facebook.com/osmandapp/',
                },
                {
                  label: 'TikTok',
                  href: 'https://www.tiktok.com/@osmandapp',
                },
                {
                  label: 'Telegram Channel',
                  href: 'https://t.me/OsmAnd_News',
                },
                {
                  label: 'Matrix',
                  href: 'https://matrix.to/#/#osmand:hacklab.fi',
                },
              ],
            },
            {
              title: 'Telegram chat',
              items: [
                {
                  label: 'English',
                  href: 'https://t.me/OsmAndMaps',
                },
                {
                  label: 'French',
                  href: 'https://t.me/frosmand',
                },
                {
                  label: 'German',
                  href: 'https://t.me/deosmand',
                },
                {
                  label: 'Italian',
                  href: 'https://t.me/itosmand',
                },
                {
                  label: 'Ukrainian',
                  href: 'https://t.me/uaosmand',
                },
                {
                  label: 'Polish',
                  href: 'https://t.me/osmand_pl',
                },
                {
                  label: 'Spanish',
                  href: 'https://t.me/osmand_es',
                },
                {
                  label: 'Brazilian',
                  href: 'https://t.me/brosmand',
                },
                {
                  label: 'Arabic',
                  href: 'https://t.me/+NwG00ihXJlBjZTA0',
                },
                {
                  label: 'Türkçe',
                  href: 'https://t.me/OsmAndTR',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/osmandapp',
                },
                {
                  label: 'OsmAnd CZ Manuals',
                  href: 'https://osmand.cz/',
                },
                {
                  label: 'Get OsmAnd Merchandise',
                  href: 'https://www.redbubble.com/shop/ap/36789864',
                },
                {
                  label: 'Support',
                  href: '/help-online/support'
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} OsmAnd BV.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };
}

/** @type {import('@docusaurus/types').Config} */
module.exports = createConfig;
