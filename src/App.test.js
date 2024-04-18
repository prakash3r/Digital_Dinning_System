import React from 'react'; // Make sure to import React if not already imported
import { render, screen } from '@testing-library/react';
import {App} from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
