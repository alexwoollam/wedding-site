import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Holder from '../../Pages/Holder';

describe('<Holding /> tests.', () => {
    test('Holder page should render', () => {
        render(<Holder/>);
        const title = screen.getByText('Alex & Lydia are Getting Married!');
        expect(title).toBeInTheDocument();
    });
});
