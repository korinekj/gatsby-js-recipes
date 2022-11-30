/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
  // graphqlTypegen: true, -> automatické generování typů pro graphql
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7p1aluahklc3`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
};