import React from 'react';
import { render } from 'react-dom';
import module1 from './module';

let { Container } = module1.components;
render(<Container />, document.getElementById('app'));

module.hot.accept();
