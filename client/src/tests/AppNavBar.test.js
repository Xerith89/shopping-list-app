import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import AppNavBar from './../components/AppNavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppNavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

