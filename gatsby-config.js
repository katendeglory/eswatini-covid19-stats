module.exports = {
  siteMetadata: {
    title: 'Covid-19 Eswatini',
    author: 'Glory Katende'
  },
  pathPrefix: 'eswatini-covid19-stats',
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Eswatini Stats",
        short_name: "Eswatini Stats",
        start_url: "/",
        background_color: "#333",
        theme_color: "#333",
        display: "standalone",
        icon: `static/favicon.ico`,
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-166294029-2",
        head: true,
      },
    },
  ]
}