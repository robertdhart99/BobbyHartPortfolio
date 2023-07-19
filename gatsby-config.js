/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `bobby-hart-portfolio`,
    description: `portfolio website built on gatsby.`,
    author: `Robertdhart99`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
      `gatsby-plugin-sass`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `pages`,
              path: `${__dirname}/src/pages/`,
          },
      },
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `Bobby Portfolio`,
            short_name: `Portfolio`,
            start_url: `/`,
            background_color: `#fff`,
            theme_color: `#02aab0`,
            display: `standalone`,
            icon: 'src/images/Logov1.png',
      },
    },
  ],
}
