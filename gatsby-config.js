module.exports = {
  siteMetadata: {
    title: 'Zetoff',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-javascript-static-exports',
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/config/typography.js',
      },
    },
  ],
};
