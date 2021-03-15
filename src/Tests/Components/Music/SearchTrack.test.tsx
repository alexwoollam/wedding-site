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

    it('State should update on searching for tracks!', () => {
        const wrapper = shallow(<SearchTracks/>);
        const componentInstance = wrapper.instance();
        componentInstance.searchForTrack({target:{value:'blue'}});
        expect(wrapper.state('theTracks')).toEqual(
            expect.objectContaining({
                "tracks": []
            })
        );
    });

    it('Submit button should submit tracks, as array', () => {
        const wrapper = shallow(<SearchTracks/>);
        const instance = wrapper.instance();
        let content = [
            {trackid: 'abc'},
            {trackid: 'def'}
        ] 
        wrapper.setState({ 
            content
        });
        const handleClick = jest.spyOn(wrapper.instance(), 'submitTracks');
        instance.forceUpdate();
        wrapper.find('[data-testid="submit-button"]').simulate('click');
        expect(handleClick).toHaveBeenCalled();
        expect(handleClick).toHaveReturnedWith([]);
    })

    it('test track removeal', () => {
        const wrapper = shallow(<SearchTracks/>);
        let content = [
            {id: '0'},
            {id: '1'},
            {id: '2'}
        ] 
        wrapper.setState({ 
            trackList: content
        });
        const instance = wrapper.instance();
        instance.removeTrack( "1" );
        expect(wrapper.state('trackList')).toEqual(
            [
                {id: "0"},
                {id: "2"},
            ]
        );

    })

    it('Lets add some tracks', () => {
        const wrapper = shallow(<SearchTracks/>);
        const instance = wrapper.instance();
        instance.addTrack( '0', 'Song 2', 'Blur', 'img.jpg' );
        expect(wrapper.state('trackList')).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: 0,
                    trackid: '0',
                    trackname: 'Song 2',
                    trackartist: 'Blur',
                    trackimage: 'img.jpg',
                })
            ])
        );
    })

    it('renders correctly', () => {
        const tree = renderer
        .create(<SearchTracks />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
