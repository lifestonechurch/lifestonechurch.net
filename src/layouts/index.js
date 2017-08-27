import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header';
import Container from '../components/Container';

import './index.css'

const TemplateWrapper = ({children}) =>
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700|Droid+Serif:400,700,400italic' rel='stylesheet' type='text/css'/>
    <Header />
    <Container>
      {children()}
    </Container>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
