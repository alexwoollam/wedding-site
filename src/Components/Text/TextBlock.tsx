import React from 'react';

function TextBlock( props ) {
  const { children } = props;
  return (
    <p 
    className="text-block text-gray-600 font-sans text-base text-center" 
    data-testid="text-block"
    >
        { children }
    </p>
  );
}

export default TextBlock;