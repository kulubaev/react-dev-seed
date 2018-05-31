//component.js
import React, { Component } from 'react';
import style from './container.scss';

console.log(style);

export const Container = () => (
  <div>
    <p className={style.navytext}>Iam the container</p>
  </div>
);

export default Container;
