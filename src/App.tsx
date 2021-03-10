import React from 'react';
import Heading from './Components/Text/Heading';
import HeaderImage from './Components/Media/HeaderImage';
import TextBlock from './Components/Text/TextBlock';
import KeepMeUpdated from './Components/Forms/KeepMeUpdated';

const text = ({
  intro: "Alex & Lydia are Getting Married!",
  subtitle: "MORE INFORMATION COMING SOON..."
});

const headingImage = ({
  src: "Images/wedding-top.png",
  alt: "Illustration of a boquet of flowers"
});

function App() {

  return (
    <div className="App container mx-auto">
      <HeaderImage src={ headingImage.src } alt={ headingImage.src }/>
      <div className="Intro">
        <Heading text={text.intro}/>
        <TextBlock text={text.subtitle}/>
        <KeepMeUpdated/>
      </div>
    </div>
  );
}

export default App;
