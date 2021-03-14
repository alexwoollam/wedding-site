import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Music from '../../Pages/Music';

describe('<Music /> tests.', () => {
    test('Music page should render', () => {
        render(<Music/>);
        const title = screen.getByText('What music would you dance too?');
        expect(title).toBeInTheDocument();
    });
    it('should renders correctly', () => {
        const tree = renderer
          .create(<Music />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
