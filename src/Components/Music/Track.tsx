import React from 'react';

interface PropsDefined {
    data: object,
    addTrack: any,
}

function Track( props: PropsDefined ){

    if( ! props ){ 
        return null;
    }
    let items = Object.values(props.data);

    if( items[1] ){
        return (
            <div className="container mx-auto">
                <div>
                    {items[1].map( (track, index)=>(
                        <div className="box-border h-32 w-130 m-5 p-4 border-4 rounded">
                            <img src={ track.album.images[2].url } alt={"artwork for " + track.name } />
                            <h2>By: { track.artists[0].name }</h2>
                            <h1>track name: { track.name }</h1>
                            <button onClick={ () => props.addTrack( track.id, track.name, track.artists[0].name, track.album.images[2].url ) } >Add track</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return null;
    }
    
} 

export default Track;