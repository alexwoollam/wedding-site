import React from 'react';
import Heading from './Components/Text/Heading';
import TextBlock from './Components/Text/TextBlock';
import KeepMeUpdated from './Components/Forms/KeepMeUpdated';

function App() {
  return (
    <div className="App container mx-auto">
      <div className="Header flex justify-center">
        <img 
          className="object-scale-down object-center w-150 h-50 m-5"
          src="Images/wedding-top.png" 
          alt="Illustration of a boquet of flowers"
          style={{
            maxWidth: "350px"
          }}
        />
      </div>
      <div className="Intro">
        <Heading text="Alex & Lydia are Getting Married!" />
        <TextBlock text="MORE INFORMATION COMING SOON..." />
        <KeepMeUpdated/>

      </div>
    </div>
  );
}

export default App;
