import React from 'react';
import { render } from '@testing-library/react';
import App from '../app/App';

test('header', () => {
  const { getByText } = render(<App />);

  expect(getByText("Kiki's CookBook")).toBeInTheDocument();
  expect(getByText('Add New Recipe')).toHaveAttribute('href', '/recipes/new');
  expect(getByText('Sign In')).toHaveAttribute('href', '/login');
  expect(getByText('Register')).toHaveAttribute('href', '/register');
});
