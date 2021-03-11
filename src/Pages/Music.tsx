import React, { useEffect, useState } from 'react';
import Heading from '../Components/Text/Heading';
import SpotifyToken from '../Controllers/Music/SpotifyToken';
//import Spotify from 'spotify-web-api-js';

const text = ({
  intro: "Croud-sources playlist!",
});

function Music() {

    const [theToken, setTheToken] = useState();

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

  return (
    <div className="App container mx-auto">
      <div className="Intro">
        <Heading text={text.intro}/>
      </div>
    </div>
  );
}

export default Music;