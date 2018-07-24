module.exports = {
  siteMetadata: {
    title: `Lifestone Church`,
    description: `A Bible based church in Riverton, Utah.`,
    keywords: `church, bible, utah, riverton, herriman`,
    navigation: [
      { name: 'Visit', path: '/visit' },
      { name: 'Events', path: '/events' },
      {
        name: 'About',
        children: [
          { name: 'About Us', path: '/about/about-us' },
          { name: 'Pastor', path: '/about/pastor' },
          { name: 'Contact Us', path: '/about/contact-us' },
          { name: 'What We Belive', path: '/about/what-we-believe' },
        ],
      },
      {
        name: 'Resources',
        children: [
          { name: 'Sermons', path: '/resources/sermons' },
          { name: 'Devotionals', path: '/resources/devotionals' },
          { name: 'Videos', path: '/resources/videos' },
        ],
      },
      { name: 'LifeGroups', path: '/lifegroups' },
      {
        name: 'Kids & Students',
        children: [
          { name: 'Birth-Kindergarten', path: '/kids/birth-kindergarten' },
          { name: 'Grades 1-5', path: '/kids/grades-1-5' },
          { name: 'Students', path: '/kids/students' },
        ],
      },
      { name: 'Little Learners', path: '/little-learners' },
      {
        name: 'Support',
        children: [
          { name: 'Serve', path: '/support/serve' },
          { name: 'Give', path: '/support/give' },
          { name: 'Concern Center', path: '/support/concern-center' },
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-44899328-1',
        respectDNT: true,
        exclude: ['/admin/**'],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ujxurwjh56v6`,
        accessToken: `402fad6cb9cd222cc3796589814b27bb76d98096ccbbc9c54e980feb97e41424`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Lifestone Church',
        short_name: 'Lifestone',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#008f01',
        display: 'minimal-ui',
        icon: 'src/images/logo/logo2.png',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
