/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const config = require("./config/site")

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix

module.exports = {
  siteMetadata: {
    // edit this data in config/site.js
    title: config.siteTitle,
    shortTitle: config.siteTitleShort,
    author: config.siteAuthor,
    siteLogoText: config.siteLogoText,
    siteDescription: config.siteDescription,
    siteUrl: config.siteUrl + pathPrefix,
    siteKeywords: config.siteKeywords,
  },
  plugins: ["gatsby-theme-scarlet"],
}
