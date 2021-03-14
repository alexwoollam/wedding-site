import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

interface PropsDefined {
    data: any,
    addTrack?: any,
    removeTrack?: any,
    isSelected?: boolean,
}

function SelectedTracks( props: PropsDefined ){

    if( ! props.data ){ 
        return null;
    }

    let items = props.data;

    if( items.length > 0 ){
        return (
            <Container className={ 'mb-3' }>
                {items.map( (track, index)=>(
                    <Row key={ index } style={{border: '2px dashed lightgrey'}} className='p-3 mt-2 rounded'>
                        <Col md={1}>
                            <img className={'rounded'} src={ track.trackimage } alt={"artwork for " + track.trackname } />
                        </Col>
                        <Col>
                            <h4>{ track.trackname }</h4>
                            <h5>{ track.trackartist }</h5>
                        </Col>
                        <Col md={1} className="d-flex justify-content-center">
                            <Button data-testid='remove-button' className={'btn-danger'} onClick={ () => props.removeTrack(track.id) }>Remove</Button>
                        </Col>
                    </Row>
                ))}
            </Container>
        );
    } else {
        return null;
    }
} 

export default SelectedTracks;