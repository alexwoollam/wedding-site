import React from 'react';
import Heading from '../Components/Text/Heading';
import SearchTrack from '../Components/Music/SearchTrack';
import { Row, Col } from 'reactstrap';

const text = ({
  intro: "What music would you dance too?",
});

function Music() {

  return (
    <Row className="App container mx-auto">
      <Col className="Intro">
        <Heading text={text.intro}/>
        <SearchTrack/>
      </Col>
    </Row>
  );
}

export default Music;