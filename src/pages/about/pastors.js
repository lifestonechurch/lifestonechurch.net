import React from 'react';
import heltonFamily from './helton-family.jpg';

const Page = () => (
  <div>
    <h1>Meet the Pastors</h1>

    <p>
      <img src={heltonFamily} alt="Helton family" /> Lead Pastor Ben Helton,
      wife Kristen, children Karis, Rachel, & Jaxson
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
