require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Richard Liu`,
    description: `My little corner of the internet.`,
    author: `@rrrliu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/richard-circle.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: 'appI9URAQRMcLQlgu',
            tableName: 'Introduction',
            tableView: 'Grid view',
          },
          {
            baseId: 'appI9URAQRMcLQlgu',
            tableName: 'Hyperlinks',
            tableView: 'Grid view',
          },
          {
            baseId: 'appI9URAQRMcLQlgu',
            tableName: 'Titles',
            tableView: 'Grid view',
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
