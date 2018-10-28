import React from 'react';

import LifeGroupLeaderLayout from './LifeGroupLeaderLayout';

const links = [
  {
    name: 'Example LifeGroup Schedule',
    link:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/pdfs/Example+LifeGroup+Schedule+10.24.18.pdf',
  },
  {
    name: 'Leader & Host Expectations',
    link:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/pdfs/Leader+%26+Host+Expectations.pdf',
  },
  {
    name: 'LifeGroup Member Expectations',
    link:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/pdfs/LifeGroup+Member+Expectations+10.3.18.pdf',
  },
];

const Page = () => (
  <LifeGroupLeaderLayout>
    <div>
      <h2>Resources</h2>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </LifeGroupLeaderLayout>
);

export default Page;
