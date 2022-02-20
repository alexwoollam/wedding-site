import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import TextBlock from '../../../Components/Text/TextBlock';

describe('<TextBlock/> component', () => {
  test('renders keep me updated form.', () => {
      render(<TextBlock>text block</TextBlock>);
    const linkElement = screen.getByText('text block');
    expect(linkElement).toBeInTheDocument();
  });

  test('If no props are sent, do an early return.', () => {
      render(<TextBlock></TextBlock>);
      const linkElement = screen.queryByTestId('text-block');
      expect(linkElement).not.toBeInTheDocument();
  });
  it('renders correctly', () => {
    const tree = renderer
        .create(<TextBlock>text block</TextBlock>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
