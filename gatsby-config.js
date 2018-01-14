module.exports = {
  siteMetadata: {
    title: `Lifestone Church`,
    navigation: [
      { name: 'Visit', path: '/visit' },
      { name: 'Events', path: '/events' },
      {
        name: 'About',
        children: [
          { name: 'About Us', path: '/about/about-us' },
          { name: 'Pastors', path: '/about/pastors' },
          { name: 'Contact Us', path: '/about/contact-us' },
          { name: 'What We Belive', path: '/about/what-we-believe' },
          { name: 'Membership', path: 'membership' },
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
      { name: 'Equip Classes', path: '/equip-classes' },
      {
        name: 'Kids & Students',
        children: [
          { name: 'Birth-Kindergarten', path: '/kids/birth-kindergarten' },
          { name: 'Grades 1-5', path: '/kids/grades-1-5' },
          { name: 'Students', path: '/students' },
        ],
      },
      {
        name: 'Support',
        children: [
          { name: 'Serve', path: '/support/serve' },
          { name: 'Give', path: '/support/give' },
          { name: 'Concern Center', path: '/support/concern-center' },
        ],
      },
    ],
    events: [
      {
        startDate: '2018-01-14',
        endDate: null,
        name: 'First Sunday with 2 Services',
        slug: '2-services',
      },
    ],
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-emotion`],
};
