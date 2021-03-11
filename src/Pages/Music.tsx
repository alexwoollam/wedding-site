import React from 'react';
import Heading from '../Components/Text/Heading';
import SearchTrack from '../Components/Music/SearchTrack';

const text = ({
  intro: "Croud-sources playlist!",
});

function Music() {

  return (
    <div className="App container mx-auto">
      <div className="Intro">
        <Heading text={text.intro}/>
        <SearchTrack/>
      </div>
    </div>
  );
}

export default Music;