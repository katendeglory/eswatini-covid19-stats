module.exports = {
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
        background_color: `#663399`,
        theme_color: `#fff`,
      },
    }
  ]
}
