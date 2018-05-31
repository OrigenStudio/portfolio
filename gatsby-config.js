module.exports = {
  siteMetadata: {
    title: 'Origen Studio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-jss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Origen Studio',
        short_name: 'Origen',
        start_url: '/',
        background_color: '#F0F0F0',
        theme_color: '#E72476',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: '24wpazn5b9fg',
      },
    },
  ],
};
