//ts-noscan
import '@testing-library/jest-dom';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Track from '../../../Components/Music/Track';


Enzyme.configure({ adapter: new Adapter() });

describe('<Track/> component', () => {

    let MockTracks = new Object();
    MockTracks = [
            {'some string':'string'},
            [
                {
                    'album': {
                        'images': [
                            {'url': "https://i.scdn.co/image/ab67616d00001e02d99d0823b831a78b50379100"},
                            {'url': "https://i.scdn.co/image/ab67616d00001e02d99d0823b831a78b50379100"},
                            {'url': "https://i.scdn.co/image/ab67616d00001e02d99d0823b831a78b50379100"},
                        ]
                    },
                    'artists': [{
                        'name': 'Blur' 
                    }],
                    'id': "1FTSo4v6BOZH9QxKc3MbVM",
                    'name': "Song 2",
                    'preview_url': "https://p.scdn.co/mp3-preview/183c0855e94b58dcb267e2b0721d4a3c99260acf?cid=1686551f71a7417da335f1cb88526648",
                },
                {
                    'album': {
                        'images': [
                            {'url': "https://i.scdn.co/image/ab67616d00001e02d99d0823b831a78b50379100"},
                            {'url': "https://i.scdn.co/image/ab67616d00001e02d99d0823b831a78b50379100"},
                            {'url': "https://i.scdn.co/image/ab67616d00001e02d99d0823b831a78b50379100"},
                        ]
                    },
                    'artists': [{
                        'name': 'Nirvana' 
                    }],
                    'id': "1FTSo4v6BOZH9QxKc3MbVM",
                    'name': "Bleach",
                    'preview_url': "https://p.scdn.co/mp3-preview/183c0855e94b58dcb267e2b0721d4a3c99260acf?cid=1686551f71a7417da335f1cb88526648",
                },
            ]
        ];


    test('Component should reuturn null if no props passed', () => {
        const comp = shallow(<Track />);
        expect(comp.type()).toEqual(null)
    });

    test('Track title should be Song 2', () => {
        render(<Track data={ MockTracks } />);
        const linkElement = screen.getByText('Song 2');
        expect(linkElement).toBeInTheDocument();
    });

    test('Artist should be blur', () => {
        render(<Track data={ MockTracks }/>);
        const linkElement = screen.getByText('Blur');
        expect(linkElement).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const tree = renderer
        .create(<Track data={ MockTracks } />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
