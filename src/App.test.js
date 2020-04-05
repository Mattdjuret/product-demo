import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders sortBy label', () => {
  const { getByText } = render(<App />);
  const sortLabel = getByText(/sort by/i);
  expect(sortLabel).toBeInTheDocument();
});
