const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

module.exports = {
  title: 'CYT',
  tagline: 'A software package for analyzing Calabi-Yau hypersurfaces in toric varieties.',
  url: 'https://cyt.ariostas.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'McAllister group', // Usually your GitHub org/user name.
  projectName: 'cyt', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CYT',
      logo: {
        alt: 'CYT',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'docs/getting-started', label: 'Get Started', position: 'left'},
        {
          to: 'docs/documentation/',
          activeBasePath: 'docs/documentation/',
          label: 'Docs',
          position: 'left',
        },
        {to: 'about/', label: 'About', position: 'left'},
        {
          href: 'https://github.com/ariostas/cyt',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/oceanicNext'),
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Getting Started',
          items: [
            {
              label: 'Installation',
              to: 'docs/getting-started/',
            },
            {
              label: 'Tutorial',
              to: 'docs/getting-started/tutorial',
            },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: 'docs/documentation/',
            },
            {
              label: 'Licensing',
              to: 'docs/documentation/license',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About CYT',
              to: 'about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ariostas/cyt',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} McAllister Group.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: ['https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML', '/js/mathjax-config.js'],
  customFields: {
    titleImage: 'img/titleimage.svg',
  }
};
