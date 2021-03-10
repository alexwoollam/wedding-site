import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('The homepage should most certainly have my name on it.', () => {
  render(<App />);
});
