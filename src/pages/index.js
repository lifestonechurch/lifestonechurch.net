import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () =>
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Card color='red' />
    <Card color='blue' />
  </div>

export default IndexPage
