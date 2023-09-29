// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mickaël Céraline',
  tagline: 'Bienvenu sur mon site',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://www.mickaelceraline.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MickaelCRL', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card

      // stylesheets: [
      //   {
      //     href: '/css/mycss.css', // Chemin d'accès à votre fichier CSS personnalisé
      //   },
      // ],

      image: 'img/docusaurus-social-card.jpg',
      navbar: {
       
        title: 'Mickaël Céraline',        
        logo: {
          alt: 'Mickaël Céraline Logo',
          src: 'img/MC.svg',                
        },
        hideOnScroll: true,

        
  
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/mickaelcrl',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [          
          {
            title: 'Community',
            items: [           
             {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/mickael-ceraline/',
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
                href: 'https://github.com/MickaelCRL',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} mickaelceraline.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
