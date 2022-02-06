import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Heading from '../../../Components/Text/Heading';


describe('<Heading/> component', () => {
  test('renders keep me updated form', () => {
    render(<Heading>Heading</Heading>);
    const linkElement = screen.getByText('Heading');
    expect(linkElement).toBeInTheDocument();
  });

  test('If no props are sent, do an early return.', () => {
    render(<Heading></Heading>);
    const linkElement = screen.queryByTestId('heading-block');
    expect(linkElement).not.toBeInTheDocument();
  });
  
  it('renders correctly', () => {
    const tree = renderer
        .create(<Heading>Heading text</Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
