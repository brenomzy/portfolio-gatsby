module.exports = {
  siteMetadata: {
    title: `Breno Daroz`,
    author: `Breno Daroz`,
    description: `Portfolio pessoal.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `brenomzy`,
    },
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/cases`,
        name: `cases`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              quality: 100,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-images-zoom`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio - Breno Daroz`,
        short_name: `Breno Daroz`,
        start_url: `/`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
        keyframes: true,
      },
    },
  ],
}
