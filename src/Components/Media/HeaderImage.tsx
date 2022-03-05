import React from 'react';
import './HeaderImage.scss';

interface ImageSent {
    src: string,
    alt: string
}

function HeaderImage( props:ImageSent ) {
  if( ! props.src ){
    return null;
  }

  return (
    <div className={"site-heading"}>
      <div className={"site-heading-left site-heading-side"}></div>
      <div className={"site-heading-center"}></div>
      <div className={"site-heading-right site-heading-side"}></div>
    </div>
  );
}

export default HeaderImage;