import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Track.scss';
import {Container, Card, Row, Col, CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

interface PropsDefined {
    data: object,
    playTrack?: any,
    addTrack?: any,
    isSelected?: boolean,
}

interface backgroundColor {
    backgroundColor: string
}

const randomColor = {
    0: '#f44336',
    1: '#e91e63',
    2: '#9c27b0',
    3: '#673ab7',
    4: '#3f51b5',
    5: '#2196f3',
    6: '#03a9f4',
    7: '#00bcd4',
    8: '#009688',
    9: '#4caf50',
    10: '#8bc34a',
    11: '#cddc39',
    12: '#ffeb3b',
    13: '#ffc107',
    14: '#ff9800',
    15: '#ff5722',
    16: '#795548',
    17: '#9e9e9e',
    18: '#607d8b',
    19: '#000000',
    20: '#ffffff',
};

const randomBackground: backgroundColor = {
    backgroundColor: randomColor[Math.floor(Math.random() * 20)],
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
                            <Card className="box-border m-3 p-2 border-4 rounded track-card">
                                <CardImg className={'cover-preview'} style={randomBackground} src={ track.album.images[1].url } alt={"artwork for " + track.name } />
                                <Button className={'m-3 track-card-button'} data-testid='add-track' onClick={ () => props.addTrack( track.id, track.name, track.artists[0].name, track.album.images[2].url ) } >Add track</Button>
                                <CardBody className={'track-card-body'}>
                                    <CardTitle tag="h4">
                                        { track.name.length > 45 ? track.name.substring(0, 45) + '...' : track.name }
                                    </CardTitle>
                                    <CardSubtitle tag="h5" className={''}>{ track.artists[0].name }</CardSubtitle>
                                    {
                                    track.preview_url ?
                                    (
                                        <div className={'track-card-preview'} data-testid="preview-button">
                                            <ReactAudioPlayer
                                                className={'w-100'}
                                                src={track.preview_url}
                                                controls
                                            />
                                        </div>
                                    ):
                                        <div className={'track-card-preview'} data-testid="preview-button"></div>
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