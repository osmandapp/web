// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OsmAnd',
  tagline: 'Offline Maps and Navigation',
  url: 'https://osmand.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'osmandapp', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.
  staticDirectories: ['static', 'legacy-image-static'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/osmandapp/web/edit/main/main/',
          sidebarItemsGenerator: require('./scripts/docs-map-generator.js'),
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
  plugins: [require.resolve('docusaurus-lunr-search')],
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
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left'},
          { to: '/docs/user/purchases', label: '💳 Purchases', position: 'left' },
          { to: 'pathname:///map', target: '_self', label: '🌍 Map', position: 'left' },
          { to: '/docs/hiring', label: '🚵‍♂️ Join us', position: 'left' },
          {
            href: 'https://github.com/osmandapp/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'OsmAnd',
            items: [
              {
                label: 'Purchases 💳',
                to: '/docs/user/purchases',
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
                href: 'https://twitter.com/osmandapp',
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
                label: 'Russian',
                href: 'https://t.me/ruosmand',
              },
              {
                label: 'Spanish',
                href: 'https://t.me/osmand_es',
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

module.exports = config;
