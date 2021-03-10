import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import KeepMeUpdated from '../../../Components/Forms/KeepMeUpdated';

test('renders keep me updated form', () => {
  render(<KeepMeUpdated />);
  const linkElement = screen.getByText(/Keep me updated:/i);
  expect(linkElement).toBeInTheDocument();
});
