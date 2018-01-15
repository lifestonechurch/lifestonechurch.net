import React from 'react';
import heltonFamily from './helton-family.jpg';
import colemanFamly from './coleman-family.jpg';

const Page = () => (
  <div>
    <h1>Meet the Pastors</h1>

    <p>
      <img src={heltonFamily} alt="Helton family" /> Lead Pastor Ben Helton,
      wife Kristen, children Karis, Rachel, & Jaxson
    </p>

    <p>
      <img src={colemanFamly} alt="Coleman family" /> Pastor Sam Coleman, wife
      Rachael, children Asher, Atticus, Abigail, & Adelai
    </p>

    <p>
      Lifestone Church is supported by{' '}
      <a href="http://www.namb.net/" target="_blank" rel="noopener">
        The North American Mission Board.
      </a>
    </p>
  </div>
);

export default Page;
