import React from 'react';
import PageMenu from '../../components/PageMenu';

const menuItems = [
  {
    name: 'Curriculum',
    link: '/lifegroup-leaders',
    external: false,
  },
  {
    name: 'LifeGroup Report',
    link: 'https://lifestonechurch.breezechms.com/form/5652c5',
    external: true,
  },
  {
    name: 'Attendance',
    link:
      'https://lifestonechurch.breezechms.com/events/overview#/?start_date=2018-10-19&view=month',
    external: true,
  },
  {
    name: 'FAQ',
    link: '/lifegroup-leaders/faq',
    external: false,
  },
  {
    name: 'Resources',
    link: '',
    external: true,
  },
];

const Menu = () => <PageMenu items={menuItems} />;

export default Menu;
