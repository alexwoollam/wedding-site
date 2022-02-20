//ts-noscan
import '@testing-library/jest-dom';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import SelectedTracks from '../../../Components/Music/SelectedTracks';


// @ts-ignore
Enzyme.configure({ adapter: new Adapter() });

describe('<SelectedTrack/> component', () => {

    let MockTracks = {};
    MockTracks = [
            {
                'id': 0,
                'trackid': 'abc',
                'trackname': 'Song 2',
                'trackartist': 'Blur',
                'trackimage': 'image.png',
            },
        ];

        let MockTracksEmpty = {};
        MockTracksEmpty = [];


    test('Component should reuturn null if no props passed', () => {
        const comp = shallow(<SelectedTracks  data={ MockTracksEmpty }/>);
        expect(comp.type()).toEqual(null)
    });

    test('Component should reuturn null if props is empty', () => {
        const comp = shallow(<SelectedTracks data={ MockTracksEmpty } />);
        expect(comp.type()).toEqual(null)
    });

    test('Component should reuturn the correct artist', () => {
        render(<SelectedTracks data={ MockTracks } />);
        const linkElement = screen.getByText('Blur');
        expect(linkElement).toBeInTheDocument();
    });

    test('Component should reuturn the correct track title', () => {
        render(<SelectedTracks data={ MockTracks } />);
        const linkElement = screen.getByText('Song 2');
        expect(linkElement).toBeInTheDocument();
    });

    test('Component should have a remove button', () => {
        render(<SelectedTracks data={ MockTracks } />);
        const linkElement = screen.getByTestId('remove-button');
        expect(linkElement).toBeInTheDocument();
    });

    test('If we remove an element, it should call the removeTrack props', () => {
        const mockRemove = jest.fn();
        const comp = shallow(<SelectedTracks data={ MockTracks } removeTrack={mockRemove} />);
        comp.find('[data-testid="remove-button"]').simulate('click');
        expect(mockRemove.mock.calls.length).toBe(1);
    });

    it('renders correctly', () => {
        const tree = renderer
        .create(<SelectedTracks data={ MockTracks } />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
