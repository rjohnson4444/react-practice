import React from 'react';
import ReactDOM from 'react-dom';
import NavContainer from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavContainer />, div);
});
