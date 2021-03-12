import React from 'react';

interface ImageSent {
    src: string,
    alt: string
}

function HeaderImage( props:ImageSent ) {
  if( ! props.src ){
    return null;
  }

  return (
    <div 
        className="Header flex justify-center"
        data-testid="header-image-block"
    >
        <img 
          className="object-scale-down object-center w-150 h-50 m-5"
          src={props.src}
          alt={props.alt}
          style={{
            maxWidth: "350px"
          }}
        />
    </div>
  );
}

export default HeaderImage;