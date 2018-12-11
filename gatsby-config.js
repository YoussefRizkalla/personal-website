module.exports = {
  siteMetadata: {
    title: 'Youssef Rizkalla',
    description: 'A passionate software developer and computer science student at McMaster University.', 
    keywords: 'youssef, rizkalla, software, computer science, developer',
    siteUrl: 'youssefrizkalla.ml',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Youssef Rizkalla Portfolio',
        short_name: 'Youssef Rizkalla',
        start_url: '/',
        background_color: '#1e88e5',
        theme_color: '#1e88e5',
        display: 'minimal-ui',
        icon: 'src/images/favicon-1024.png',
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
  ],
}
