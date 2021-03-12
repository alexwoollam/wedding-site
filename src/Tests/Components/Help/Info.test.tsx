import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Info from '../../../Components/Help/Info';

describe('<InfoBlock /> component', () => {
  test('infoblock text should return correct props.', () => {
    render(<Info text='text' tooltip='tooltip'/>);
    const InfoBlockContent = screen.getByText('text');
    expect(InfoBlockContent).toBeInTheDocument();
  });

  test('infoblock tooltip should return correct props.', () => {
    render(<Info text='text' tooltip='tooltip'/>);
    const InfoBlockContent = screen.getByText('tooltip');
    expect(InfoBlockContent).toBeInTheDocument();
  });

  test('If no props are sent, do an early return.', () => {
      render(<Info />);
      const linkElement = screen.queryByTestId('info');
      expect(linkElement).not.toBeInTheDocument();
  });
});
