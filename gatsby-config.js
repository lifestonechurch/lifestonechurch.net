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
          { name: 'Membership', path: '/about/membership' },
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
        ministry: 'churchwide',
      },
      {
        startDate: '2018-01-20',
        endDate: null,
        name: `Men's Serve Day`,
        slug: `mens-serve-day`,
        ministry: 'men',
      },
      {
        startDate: `2018-01-17`,
        endDate: null,
        name: `Sledding Party`,
        description: `<div>SLEDDING PARTY! Meet @ Lifestone at 6:00pm. We will have a game night instead if weather does not cooperate.</div>`,
        ministry: 'youth',
      },
      {
        startDate: `2018-02-14`,
        endDate: null,
        name: `Service project`,
        description: `<div>Make Valentine's Day cards and take them next door to Rocky Mountain Care Center residents.</div>`,
        ministry: 'youth',
      },
    ],
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-emotion`],
};
