/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.GATSBY_CONTENTFUL_SPACE_ID
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};
