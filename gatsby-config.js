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
        name: `teisenhower.dev portfolio and blog site`,
        short_name: `teisenhower.dev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-153782937-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
