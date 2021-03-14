//ts-noscan
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Track from '../../../Components/Music/Track';

describe('<TextBlock/> component', () => {

    let MockTracks = new Object();
    MockTracks = {
        'items': {
            'album': {
                'images': [
                    {'url': "https://i.scdn.co/image/ab67616d00001e02d99d0823b831a78b50379100"},
                    {'url': "https://i.scdn.co/image/ab67616d00001e02d99d0823b831a78b50379100"}
                ]
            },
            'artists': [ 
                'name': "Blur" 
            ],
            'id': "1FTSo4v6BOZH9QxKc3MbVM",
            'name': "Song 2 - 2012 Remaster",
            'preview_url': "https://p.scdn.co/mp3-preview/183c0855e94b58dcb267e2b0721d4a3c99260acf?cid=1686551f71a7417da335f1cb88526648",
        }
    }

    test('Track title should be Song 2', () => {
        render(<Track data={ MockTracks } />);
        const linkElement = screen.getByText('Song 2 - 2012 Remaster');
        expect(linkElement).toBeInTheDocument();
    });

    test('Artist should be blur', () => {
        render(<Track data={ MockTracks }/>);
        const linkElement = screen.queryByTestId('Blur');
        expect(linkElement).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
        const tree = renderer
        .create(<Track  />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
