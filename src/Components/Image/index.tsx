import React from 'react';
import photon from 'photon';
import {Row, Col, Media} from 'reactstrap';
import './Image.scss';

interface ImageSent {
    src: string,
    alt: string
}

function Image( props:ImageSent ) {
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
                        src={photon( 'http://lydiaandalex.com' + props.src)}
                        alt={props.alt}
                    />
                </Media>
            </Col>
        </Row>
    );
}

export default Image;