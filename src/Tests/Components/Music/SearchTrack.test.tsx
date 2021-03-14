//ts-noscan
import '@testing-library/jest-dom';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import SearchTracks from '../../../Components/Music/SearchTrack';

Enzyme.configure({ adapter: new Adapter() });

describe('<SearchTracks/> component', () => {

    test('Component should have submission button', () => {
        render(<SearchTracks/>);
        const InfoBlockContent = screen.getByTestId('submit-button');
        expect(InfoBlockContent).toBeInTheDocument();
    });

    

    it('renders correctly', () => {
        const tree = renderer
        .create(<SearchTracks />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
