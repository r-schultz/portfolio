import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project list', () => {
  render(<App />);
  const projectOne = screen.getByText(/Project 1/i);
  expect(projectOne).toBeInTheDocument();
});
