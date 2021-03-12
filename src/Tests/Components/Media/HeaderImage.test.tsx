import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderImage from '../../../Components/Media/HeaderImage';

describe('<HeadingImage/> component', () => {
  test('Component should render', () => {
    render(<HeaderImage src="foo.png" alt="bar" />);
    const linkElement = screen.getByTestId("header-image-block");
    expect(linkElement).toBeInTheDocument();
  });

  test('Components src should be foo.png', () => {
      render(<HeaderImage src="foo.png" alt="bar" />);
      const linkElement = screen.getByRole('img', { src: 'foo.png' });
      expect(linkElement).toBeInTheDocument();
  });

  test('Components alt should be bar', () => {
      render(<HeaderImage src="foo.png" alt="bar" />);
      const linkElement = screen.getByAltText("bar");
      expect(linkElement).toBeInTheDocument();
  });
});