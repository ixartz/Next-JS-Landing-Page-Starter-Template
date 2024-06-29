import React from 'react';

const MySvg = require('./close.svg');

export const foo = require(path.join(pkgBase, 'package.json')); // regression test

export default function MyFunctionIcon() {
  return <MySvg />;
}

export class MyClassIcon extends React.Component {
  render() {
    return <MySvg />;
  }
}
