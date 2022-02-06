import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Music from '../../Pages/Music';
import {Provider} from "react-redux";
import {store} from "../../store";

describe('<Music /> tests.', () => {
    test('Music page should render', () => {
        render(<Provider store={store}><Music /></Provider>);
        const title = screen.getByText('Music');
        expect(title).toBeInTheDocument();
    });
    it('should renders correctly', () => {
        const tree = renderer
            .create(<Provider store={store}><Music /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
