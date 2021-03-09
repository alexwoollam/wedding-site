import React from 'react';

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
        <h1
          className="text-grey-700 font-serif text-3xl text-center m-5"
        >
          Alex & Lydia are Getting Married!
        </h1>
        <p
          className="text-gray-600 font-sans text-base text-center"
        >
          MORE INFORMATION COMING SOON...
        </p>
      </div>
    </div>
  );
}

export default App;
