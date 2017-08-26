import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Button from '../components/Button';

const IndexPage = () =>
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Card> Blah </Card>
    <Card> 
      <Button>I don't need no defualt</Button>
      <p>I'm a paragraph</p>
    </Card>


    <Card children={<Button>I don't need no defualt</Button>} />

    <Button linkTo='http://www.google.com'>I am a button!</Button>
    <Button linkTo='contact'>No, I am a button!</Button>
  </div>


export default IndexPage
