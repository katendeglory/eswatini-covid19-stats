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
        name: `Eswatini Covid-19 Stats`,
        short_name: `Eswatini Covid-19 Stats`,
        description: `Stats on the spread of Covid-19 in the Kingdom of Eswatini.`,
        lang: `en`,
        display: `standalone`,
        icon: `static/favicon.ico`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
      },
    }
  ]
}
