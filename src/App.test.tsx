import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project list', () => {
  render(<App />);
  const projects = screen.getByRole('navigation');
  expect(projects.childNodes.length).toEqual(4);
});
