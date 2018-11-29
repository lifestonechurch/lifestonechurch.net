require('dotenv').config();
const { DateTime } = require('luxon');
var humanizeList = require('humanize-list');

const COLORS = { BRAND: '#008F01' };

module.exports = {
  siteMetadata: {
    title: `Lifestone Church`,
    podcastSubtitle: `Messages from Sunday morning worship at Lifestone Church`,
    description: `A Bible based church in Riverton, Utah.`,
    coverArt: `logo2.jpg`,
    siteUrl: `https://www.lifestonechurch.net`,
    ownerEmail: `lifestone@lifestonechurch.net`,
    categories: ['Religion & Spirituality', 'Christianity'],
    keywords: `church, bible, utah, riverton, herriman`,
    navigation: [
      {
        name: 'About',
        children: [
          { name: 'Visit', path: '/about/visit/' },
          { name: 'About Us', path: '/about/about-us/' },
          { name: 'Pastor', path: '/about/pastor/' },
          { name: 'Contact Us', path: '/about/contact-us/' },
          { name: 'What We Believe', path: '/about/what-we-believe/' },
        ],
      },
      { name: 'Events', path: '/events/' },
      {
        name: 'Connect',
        children: [
          { name: 'LifeGroups', path: '/connect/lifegroups/' },
          { name: 'Serve', path: '/connect/serve/' },
          { name: 'Concern Center', path: '/connect/concern-center/' },
        ],
      },
      {
        name: 'Kids + Students',
        children: [
          { name: 'Birth-Kindergarten', path: '/kids/birth-kindergarten/' },
          { name: 'Grades 1-5', path: '/kids/grades-1-5/' },
          { name: 'Grades 6-12', path: '/kids/grades-6-12/' },
        ],
      },
      { name: 'Little Learners', path: '/little-learners/' },
      { name: 'Listen', path: '/resources/' },
      { name: 'Give', path: '/give/' },
    ],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: COLORS.BRAND,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              podcastSubtitle
              coverArt
              siteUrl
              ownerEmail
              categories
            }
          }
        }
      `,
        feeds: [
          {
            setup: ({
              query: { site: { siteMetadata }, allContentfulSermon: { edges } },
            }) => ({
              title: siteMetadata.title,
              description: siteMetadata.description,
              feed_url: `${siteMetadata.siteUrl}/feed.rss`,
              site_url: siteMetadata.siteUrl,
              image_url: `${siteMetadata.siteUrl}/${siteMetadata.coverArt}`,
              managingEditor: `${siteMetadata.titel} (${
                siteMetadata.ownerEmail
              })`,
              webMaster: `${siteMetadata.title} (${siteMetadata.ownerEmail})`,
              copyright: `${new Date().getFullYear()} ${siteMetadata.title}`,
              language: 'en',
              categories: siteMetadata.categories,
              pubDate: DateTime.fromISO(new Date()).toHTTP(),
              ttl: '60',
              custom_namespaces: {
                itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
              },
              custom_elements: [
                { 'itunes:subtitle': siteMetadata.podcastSubtitle },
                { 'itunes:author': siteMetadata.title },
                { 'itunes:explicit': 'clean' },
                {
                  'itunes:summary': siteMetadata.description || ``,
                },
                {
                  'itunes:owner': [
                    { 'itunes:name': siteMetadata.title },
                    { 'itunes:email': siteMetadata.ownerEmail },
                  ],
                },
                {
                  'itunes:image': {
                    _attr: {
                      href: `${siteMetadata.siteUrl}/${siteMetadata.coverArt}`,
                    },
                  },
                },
                ...(siteMetadata.categories
                  ? siteMetadata.categories.map(c => ({
                      'itunes:category': {
                        _attr: {
                          text: c,
                        },
                      },
                    }))
                  : {}),
              ],
            }),
            serialize: ({
              query: { site: { siteMetadata }, allContentfulSermon },
            }) =>
              allContentfulSermon.edges.map(({ node }) => ({
                title: node.title || '',
                description: node.shortDescription || '',
                url: `${siteMetadata.siteUrl}/resources/sermons/${
                  node.fields.slug
                }`,
                guid: node.id,
                author: node.speaker.map(s => s.name, {
                  oxfordComma: true,
                }),
                enclosure: {
                  url: `https://www.podtrac.com/pts/redirect.mp3/${
                    node.audioUrl
                  }`,
                  length: node.audioLength,
                  type: 'audio/mp3',
                },
                custom_elements: [
                  {
                    pubDate: DateTime.fromISO(node.date).toHTTP(),
                  },
                  {
                    'itunes:author': humanizeList(
                      node.speaker.map(s => s.name, { oxfordComma: true })
                    ),
                  },
                  {
                    'itunes:subtitle': node.shortDescription || '',
                  },
                  {
                    'itunes:summary': node.shortDescription || '',
                  },
                  {
                    'content:encoded': `<p>${node.shortDescription || ''}</p>${
                      node.fields && node.fields.notesFormatted
                        ? node.fields.notesFormatted
                        : ``
                    }`,
                  },
                  { 'itunes:explicit': 'clean' },
                  {
                    'itunes:image': {
                      _attr: {
                        href:
                          node.sermonSeries &&
                          node.sermonSeries.image &&
                          node.sermonSeries.file
                            ? `https:${node.sermonSeries.image.file.url}`
                            : '',
                      },
                    },
                  },
                  { 'itunes:duration': node.audioDuration },
                ],
              })),
            query: `
            {
              allContentfulSermon(sort: { fields: [date], order: DESC }) {
                edges {
                  node {
                    id
                    fields {
                      slug
                      notesFormatted
                    }
                    title
                    shortDescription,
                    date
                    audioUrl
                    audioDuration
                    audioLength
                    date
                    sermonSeries {
                      name
                      image {
                        title
                        file {
                          url
                        }
                      }
                    }
                    speaker {
                      name
                      photo {
                        file {
                          url
                        }
                      }
                    }
                    mainScripture
                  }
                }
              }
            }
          `,
            output: '/feed.rss',
          },
        ],
      },
    },
    `gatsby-plugin-netlify`, // must be last in the array
  ],
};
