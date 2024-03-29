module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: {
        prefixes: [`/dashboard/*`],
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        mergeSecurityHeaders: false,
        // headers: { "/*": ["X-Frame-Options: SAMEORIGIN"] },
        headers: {
          "/using-typescript/": [
            `x-test-header: this is the header for /new-beginnings/`,
          ],
        },
        //   "/*": [
        //     "Content-Security-Policy: frame-ancestors https://app.zoominfo.com",
        //     "Access-Control-Allow-Origin: https://app.zoominfo.com",
        //     "X-Content-Type-Options: nosniff",
        //     "X-`Frame-Options: ALLOW-FROM https://app.zoominfo.com",
        //     "X-XSS-Protection: 1; mode=block",
        //     "dustin: mccraw",
        //   ],
        // },
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ],
        // allPageHeaders: [
        //   "Link: </fonts/abrilfatface-regular-webfont.woff>; rel=preload; as=font; crossorigin;",
        //   "Link: </fonts/monoline-regular.otf>; rel=preload; as=font; crossorigin;",
        //   "Link: </fonts/maax-webfont.woff>; rel=preload; as=font; crossorigin;",
        //   "Link: </fonts/maax-medium-webfont.woff>; rel=preload; as=font; crossorigin;",
        // ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  trailingSlash: `never`,
}
