// @ts-nocheck
import React, {Component} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Track from './Track';
import SelectedTracks from './SelectedTracks';
import './SearchTrack.scss';
import { Col, Form, Input, Button } from 'reactstrap';
import {connect} from "react-redux";
import GoogleSheets from "../../Controllers/Forms/GoogleSheets";

const SPREADSHEET_ID:string = process.env.REACT_APP_SPREADSHEET_ID!;
const MUSIC_SHEET_ID:string = process.env.REACT_APP_MUSIC_SHEET_ID!;

class SearchTracks extends Component{

    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
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
        this.submitTracks = this.submitTracks.bind(this);
    }

    addTrack( id: string, title: string, artist: string, image: string ){
        var the_length = 0;
        if(this.state.trackList){
            the_length = this.state.trackList.length; 
        }

        const object = {
            id: the_length, 
            trackid: id,
            trackname: title,
            trackartist: artist,
            trackimage: image,
        }
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
        var trackArray = [];
        this.state.trackList.map((track: any) => (
            trackArray.push(
                {
                    'id': track.trackid,
                    'track': track.trackname,
                    'artist': track.trackartist
                }
            )
        ));

        trackArray.map((track: any, i) => {
            GoogleSheets(track, SPREADSHEET_ID, MUSIC_SHEET_ID);
            // eslint-disable-next-line array-callback-return
            return;
        });

        this.setState({
            submitted: true,
            trackList: []
        });

        window.scrollTo(0, 0);

    }

    searchForTrack( search:any ){
        var spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(this.state.theToken);
        spotifyApi.searchTracks(search.target.value, {limit: 6}).then(
            (data) => {        
                this.setState({
                    theTracks: data,
                })
            },
        );
    }

    render() {
        return (
            <Col className='track-selector'>
                { this.state.submitted ? <h2>Tracks submitted, you can add more via the music tab at a later date if you link.</h2> : null }

                <SelectedTracks data={ this.state.trackList } removeTrack={ this.removeTrack } isSelected={true} />
                { this.state.trackList.length > 0 ? <Button className={'m-3 track-card-button btn btn-secondary'} data-testid='submit-button' onClick={ this.submitTracks }>&#128378; Submit! &#128131;</Button> : null }
                <Form className="max-w-md-10">
                    <label>Search:</label>
                    <Input 
                    type="text"
                    id="search-track"
                    data-testid='search-input'
                    className="p-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="Search Track, Artist or Album"
                    onChange={ this.searchForTrack }
                    ></Input>
                </Form>
                <Track data={ this.state.theTracks.tracks } addTrack={ this.addTrack } />
                <br/>
            </Col>
        );
    };   
}

const connected = connect(
    null,
    null,
)(SearchTracks);

export { connected as SearchTracks };
