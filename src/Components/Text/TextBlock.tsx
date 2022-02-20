import React from 'react';
import './TextBlock.scss';

function TextBlock( props ) {
  const { children } = props;
  if(children){
    return (
        <p
            className="text-block text-gray-600 font-sans text-base text-center"
            data-testid="text-block"
        >
          { children }
        </p>
    );
  } else {
    return null;
  }
}

export default TextBlock;