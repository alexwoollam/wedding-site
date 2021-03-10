import React from 'react';

interface TextSent {
    text: string;
}

function TextBlock( props:TextSent ) {
  if( ! props.text ){
    return null;
  }
  return (
    <p 
    className="text-block text-gray-600 font-sans text-base text-center" 
    data-testid="text-block"
    >
        { props.text }
    </p>
  );
}

export default TextBlock;