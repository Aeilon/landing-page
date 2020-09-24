module.exports = {
  siteMetadata: {
    title: `Landing Page`,
    description: `Landing page with gatsby and styled components`,
    author: `Kamil Król`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true,
        disable: false,

        selector: "[data-sal]",
        animateClassName: "sal-animate",
        disabledClassName: "sal-disabled",
        rootMargin: "0% 50%",
        enterEventName: "sal:in",
        exitEventName: "sal:out",
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Gatsby.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Archivo\:400,500,700`],
        display: "swap",
      },
    },
  ],
}
