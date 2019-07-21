import React from 'react';
import { render} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each';
import AppNavBar from './../components/AppNavBar';

it('renders without crashing', () => {
  const element = render(<AppNavBar />)
  expect(element).toMatchSnapshot();
});
