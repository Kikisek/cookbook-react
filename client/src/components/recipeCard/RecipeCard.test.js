import React from 'react';
import { render } from '@testing-library/react';
import RecipeCard from './RecipeCard';

test('recipe card', () => {
  const testRecipe = {title: 'Test title', image: 'www.test.com', _id: 'ghjhghjhghj123'};
  const { getByText, getByAltText } = render(<RecipeCard recipe={testRecipe} />);

  expect(getByText('Test title')).toHaveAttribute('href', '/recipes/ghjhghjhghj123');
  expect(getByAltText('Go to Test title')).toHaveAttribute('src', 'www.test.com');
});
