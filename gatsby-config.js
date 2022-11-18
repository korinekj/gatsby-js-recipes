/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: 'John Doe',
    person: {
      name: 'jarda',
      age: '28',
    },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      {
        name: 'jarda',
        age: '28',
      },
      {
        name: 'michal',
        age: '25',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
