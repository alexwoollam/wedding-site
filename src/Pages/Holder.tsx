import React from 'react';
import Heading from '../Components/Text/Heading';
import TextBlock from '../Components/Text/TextBlock';
import KeepMeUpdated from '../Components/Forms/KeepMeUpdated';
import { Container, Row, Col } from 'reactstrap';


const text = ({
  intro: "Alex & Lydia are Getting Married!",
  subtitle: "MORE INFORMATION COMING SOON..."
});

function Holder() {

  return (
    <Container>
      <Row className="Intro">
        <Col md={12}
          className="m-auto"
        >
          <Heading text={text.intro}/>
          <TextBlock text={text.subtitle}/>
          <KeepMeUpdated/>
        </Col>
      </Row>
    </Container>
  );
}

export default Holder;
