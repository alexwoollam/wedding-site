import React from 'react';

interface TextSent {
    text: string;
}

function TextBlock( props:TextSent ) {
  return (
    <p className="text-gray-600 font-sans text-base text-center" >
        { props.text }
    </p>
  );
}

export default TextBlock;