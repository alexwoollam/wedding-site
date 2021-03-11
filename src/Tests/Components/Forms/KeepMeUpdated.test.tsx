import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import KeepMeUpdated from '../../../Components/Forms/KeepMeUpdated';

test('renders keep me updated form lable', () => {
  render(<KeepMeUpdated />);
  const linkElement = screen.getByText('Keep me updated');
  expect(linkElement).toBeInTheDocument();
});

test('submit button should not display if no user details have been added', () => {
  render(<KeepMeUpdated />);
  const buttonElement = screen.queryByTestId('submit-button');
  expect(buttonElement).not.toBeInTheDocument();
})