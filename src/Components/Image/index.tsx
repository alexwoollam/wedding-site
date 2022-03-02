import React from 'react';
import photon from 'photon';
import {Row, Col, Media} from 'reactstrap';
import './Image.scss';

interface ImageSent {
    src: string,
    alt: string
}

function Image( props:ImageSent ) {

    const image = () => {
        return photon( 'http://lydiaandalex.com' + props.src ) + '?w=600&crop=0px,0px,570px,570px&strip=all';
    }

    if( ! props.src ){
        return null;
    }

    return (
        <Row
            className="flex justify-center image-block"
            data-testid="image-block"
        >
            <Col
                className="col-sm-12 col-md-6 m-auto "
            >
                <Media center="true">
                    <Media
                        object
                        src={image()}
                        alt={props.alt}
                    />
                </Media>
            </Col>
        </Row>
    );
}

export default Image;