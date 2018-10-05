# lifestonechurch.net

[![Build Status](https://travis-ci.org/lifestonechurch/lifestonechurch.net.svg?branch=master)](https://travis-ci.org/lifestonechurch/lifestonechurch.net)

Website for [lifestonechurch.net](https://www.lifestonechurch.net/).

![Screenshot of lifestonechurch.net](screenshot.png)

## Running

Create a `.env` file in the root folder with the following variables (replace with the real values). Only the first 2 are required to run the project. Check out [the wiki](https://github.com/lifestonechurch/lifestonechurch.net/wiki) for a Contentful Space ID and Contentful Access Token you can use to develop locally.

```
CONTENTFUL_SPACE_ID=k9ajfiadv9aj
CONTENTFUL_ACCESS_TOKEN=39kd99313kdkkad8fwe0xvmqv90213mv91238jk91298ijkqw073856kajsdv097
GOOGLE_ANALYTICS_TRACKING_ID=UA-12345678-1
GATSBY_LIFEGROUP_LEADER_PASSWORD=kindasecret
```

Then run:

```sh
npm install
npm run develop
```

## Built with Gatsby and Contentful

[Gatsby documentation](https://www.gatsbyjs.org/docs/)

<a href="https://www.contentful.com/" rel="nofollow" target="_blank"><img src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" width="100" alt="Powered by Contentful" /></a>
