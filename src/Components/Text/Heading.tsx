import React from 'react';

interface TextSent {
    text: string;
}

function Heading( props:TextSent ) {
  return (
    <h1 className="text-grey-700 font-serif text-3xl text-center m-5">
        { props.text }
    </h1>
  );
}

export default Heading;