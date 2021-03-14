import React from 'react';
import {Row, Col, Media} from 'reactstrap';

interface ImageSent {
    src: string,
    alt: string
}

function HeaderImage( props:ImageSent ) {
  if( ! props.src ){
    return null;
  }

  return (
    <Row 
        className="Header flex justify-center"
        data-testid="header-image-block"
    >
      <Col
        className="col-sm-12 col-md-6 m-auto"
      >
      <Media center="true">
        <Media 
          object
          data-src={props.src}
          alt={props.alt}
        />
      </Media>
      </Col>
    </Row>
  );
}

export default HeaderImage;