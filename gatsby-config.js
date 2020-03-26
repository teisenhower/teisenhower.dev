module.exports = {
  siteMetadata: {
    title: `teisenhower.dev`,
    description: `teisenhower.dev`,
    author: `@teisenhower`,
    social: {
      twitter: "https://twitter.com/teisenhower",
      github: "https://github.com/teisenhower",
      gitlab: "https://gitlab.com/teisenhower",
      stack: "https://stackoverflow.com/users/11223118/terrence",
    },
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
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
