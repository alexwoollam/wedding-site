import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Track from './Track';

interface theTracksInterface{
    tracks: object,
}

function SearchTracks() {

    const [theToken, setTheToken] = useState();
    const [theTracks, setTheTracks] = useState<theTracksInterface>({
        tracks: []
    });

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

    const searchForTrack = ( event:any ) => {
        var search:string = event.target.value;
        let the_Token: any = theToken;
        var spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(the_Token);
        if( search.length > 1 ){
            spotifyApi.searchTracks(search).then(
                function (data) {
                    console.log( data );
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


    if(theTracks.tracks){
        return (
            <>
            <form className="m-auto max-w-md my-10">
                <input 
                type="text" 
                className="p-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Song title"
                onChange={ searchForTrack }
                ></input>
            </form>
            <Track data={ theTracks.tracks }/>
            </>
        );
    } else {
        return (
            <>
            <form className="m-auto max-w-md my-10">
                <input 
                type="text" 
                className="p-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Song title"
                onChange={ searchForTrack }
                ></input>
            </form>
            </>
        );
    }
    
}

export default SearchTracks;