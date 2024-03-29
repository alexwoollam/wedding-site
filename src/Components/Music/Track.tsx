import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {Container, Card, Row, Col, CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

interface PropsDefined {
    data: object,
    playTrack?: any,
    addTrack?: any,
    isSelected?: boolean,
}

function Track( props: PropsDefined ){

    if( ! props.data ){ 
        return null;
    }

    let items = Object.values(props.data);
    
    if( items[1] ){        
        return (
            <Container className="container mx-auto">
                <Row>
                    {items[1].map( (track, index)=>(
                        <Col key={index} sm={12} md={4}>
                            <Card className="box-border m-3 p-2 border-4 rounded">
                                <CardImg src={ track.album.images[1].url } alt={"artwork for " + track.name } />
                                <Button data-testid='add-track' onClick={ () => props.addTrack( track.id, track.name, track.artists[0].name, track.album.images[2].url ) } >Add track</Button>
                                <CardBody>
                                    
                                            <CardTitle tag="h4">{ track.name }</CardTitle>
                                            <CardSubtitle tag="h5">{ track.artists[0].name }</CardSubtitle>
                                            <br/>
                                            {
                                            track.preview_url ? 
                                            (
                                                <div data-testid="preview-button">
                                                    <ReactAudioPlayer
                                                    className={'w-100'}
                                                    src={track.preview_url}
                                                    controls
                                                    />
                                                </div>
                                            ):
                                            null
                                            }
                                    
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    } else {
        return null;
    }
    
} 

export default Track;