import React from 'react';
import { render } from '@testing-library/react';
import App from '../app/App';

test('homepage', () => {
  const { getByText } = render(<App />);

  expect(getByText("Kiki's CookBook")).toBeInTheDocument();
});
