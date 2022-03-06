import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import './SelectedTracks.scss';

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
                        <Col xs={{ size: 6, order: 1}} sm={2} md={2}>
                            <img className={'rounded'} src={ track?.trackimage } alt={"artwork for " + track.trackname } />
                        </Col>
                        <Col xs={{ size: 10, order: 2}} sm={{ size: 12, order: 2 }} md={8}>
                            <h4>{ track.trackname }</h4>
                            <h5>{ track.trackartist }</h5>
                        </Col>
                        <Col xs={{ size: 6, order: 1}} sm={{ size: 2, order: 3}} className="d-flex justify-content-center">
                            <Button data-testid='remove-button' className={'btn-remove'} onClick={ () => props.removeTrack(track.id) }>Remove</Button>
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