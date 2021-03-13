//ts-nocheck
import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
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

function SearchTracks() {

    const [theToken, setTheToken] = useState();
    const [trackList, setTrackList] = useState<trackListInterface[]>([]);
    const [theTracks, setTheTracks] = useState<theTracksInterface>({
        tracks: [],
    });

    const addTrack = ( id: string, title: string, artist: string, image: string ) => {
        setTrackList([ ...trackList, { 
            id: trackList.length, 
            trackid: id,
            trackname: title,
            trackartist: artist,
            trackimage: image,
        } ] );
    }

    const removeTrack = ( id: number ) => {
        const remove = id;
        setTrackList(trackList.filter(({ id }) => id !== remove));
    }

    useEffect(() => {
        console.log(trackList);
    }, [trackList]);

    useEffect(() => {
        if( ! theToken ){
            const CLIENT_ID:string = process.env.REACT_APP_SPOTIFYCLI!;
            const CLIENT_SEC:string = process.env.REACT_APP_SPOTIFYSEC!;

            var token = btoa( CLIENT_ID + ':' + CLIENT_SEC );

            const recived_token = fetch("https://accounts.spotify.com/api/token", {
            body: "grant_type=client_credentials",
            headers: {
                'Authorization': 'Basic ' + token,
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            method: "POST"
            })
            .then(response => response.json())
            .then( data => setTheToken( data.access_token ) );
        }
    })

    const submitTracks = () => {
        let the_Token: any = theToken;
        var spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(the_Token);
        let playlistId: string; 
        playlistId = process.env.REACT_APP_SPOTIFYPLAYLIST;
        let trackArray: string[] = [];
        trackList.map((track: any) => (
            trackArray.push('spotify:track:'+track.trackid)
        ));
        console.log( spotifyApi );
        spotifyApi.addTracksToPlaylist( playlistId, trackArray );
    }

    const searchForTrack = ( event:any ) => {
        var search:string = event.target.value;
        let the_Token: any = theToken;
        var spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(the_Token);
        if( search.length > 1 ){
            spotifyApi.searchTracks(search).then(
                function (data) {
                  setTheTracks( data );
                },
                function (err) {
                  console.error(err);
                }
              );
        } else {
            let data = Object.create(null);
            setTheTracks(data);
        }
    }

    let return_tracks_search;

    if(theTracks.tracks){
        return_tracks_search = <Track data={ theTracks.tracks } addTrack={ addTrack } />
    };
    return (
        <Col
            className='m-auto'
        >
            <Button onClick={ submitTracks }>Lets rock!</Button>
            <SelectedTracks data={ trackList } removeTrack={ removeTrack } isSelected={true} />
            <Form className="m-auto max-w-md my-10">
                <Input 
                type="text" 
                className="p-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Song title"
                onChange={ searchForTrack }
                ></Input>
            </Form>
            {return_tracks_search}
        </Col>
    );
    
}

export default SearchTracks;