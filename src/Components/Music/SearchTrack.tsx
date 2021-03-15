// @ts-nocheck
import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import SpotifyAuthApi from 'spotify-web-api-node';
import Track from './Track';
import SelectedTracks from './SelectedTracks';
import { Col, Form, Input, Button } from 'reactstrap';
import { Submit } from '../Forms/KeepMeUpdated';

interface theTracksInterface{
    tracks: object,
}

interface trackListInterface{
    id: number, 
    trackid: string,
    trackname: string,
    trackartist: string,
    trackimage: string,
}

class SearchTracks extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            theToken: [],
            spotifyCreds: true,
            trackList: [],
            theTracks: {
                tracks: []
            },
        };

        this.searchForTrack = this.searchForTrack.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack( id: string, title: string, artist: string, image: string ){
        var the_length;
        if(this.state.trackList){
            the_length = this.state.trackList.length; 
        } else {
            the_length = 0;
        }

        const object = {
            id: the_length, 
            trackid: id,
            trackname: title,
            trackartist: artist,
            trackimage: image,
        }
        console.log(object);
        console.log('^^object');
        var joined = this.state.trackList.concat(object);
        this.setState({ trackList: joined });

    }

    removeTrack( id: number ){
        const list = this.state.trackList.filter(trackList => trackList.id !== id);
        this.setState({ trackList: list });
    }

    componentDidMount(){
        const CLIENT_ID:string = process.env.REACT_APP_SPOTIFYCLI!;
        const CLIENT_SEC:string = process.env.REACT_APP_SPOTIFYSEC!;

        var token = btoa( CLIENT_ID + ':' + CLIENT_SEC );

        fetch("https://accounts.spotify.com/api/token", {
        body: "grant_type=client_credentials",
        headers: {
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        method: "POST"
        })
        .then(response => response.json())
        .then( data => 
            this.setState({
                theToken: data.access_token
            })
        );
    };

    submitTracks() {
        
        let trackArray: string[] = [];
        this.state.trackList.map((track: any) => (
            trackArray.push('spotify:track:'+track.trackid)
        ));
        /**
         * yeeah, we're going to have to dump these to a google sheet or something.
         */

    }

    searchForTrack( search:any ){
        var spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(this.state.theToken);
        spotifyApi.searchTracks(search.target.value).then(
            (data) => {        
                this.setState({
                    theTracks: data,
                })
            },
        );
        

        
    }

    render() {
        return (
            <Col
                className='m-auto'
            >
                <Button data-testid='submit-button' onClick={ this.submitTracks }>Lets rock!</Button>
                <SelectedTracks data={ this.state.trackList } removeTrack={ this.removeTrack } isSelected={true} />
                <Form className="m-auto max-w-md my-10">
                    <Input 
                    type="text"
                    id="search-track"
                    data-testid='search-input'
                    className="p-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="Song title"
                    onChange={ this.searchForTrack }
                    ></Input>
                </Form>
                <Track data={ this.state.theTracks.tracks } addTrack={ this.addTrack } />
            </Col>
        );
    };
    
}

export default SearchTracks;