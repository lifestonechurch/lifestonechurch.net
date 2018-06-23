import React from 'react';
import styled from 'react-emotion';

const getPath = (navigation, pathname) => {
  if (!navigation) {
    return [];
  }
  // if (navigation.length === 1) {
  //   return pathname;
  // }
  navigation.forEach(nav => {
    console.log(nav.name);
    return [nav.name, ...getPath(nav.children, pathname)];
  });
  // const matchingPath = Object.values(navigation).filter(
  //   ({ path }) => pathname.indexOf(path) == 0 || path === null
  // );
  // console.log(matchingPath);
  // if (matchingPath.length >= 0) {
  //   matchingPath.forEach(path => {
  //     getPath(path, pathname);
  //   });
  // }
  // return matchingPath;
};

const Breadcrumbs = ({ navigation, pathname }) => {
  // console.log(navigation, pathname);
  console.log(getPath(navigation, pathname));
  return <div>answer - {getPath(navigation, pathname)}</div>;
};

export default Breadcrumbs;
