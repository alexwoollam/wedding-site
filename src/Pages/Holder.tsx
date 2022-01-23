import React from 'react';
import Heading from '../Components/Text/Heading';
import HeaderImage from '../Components/Media/HeaderImage';
import TextBlock from '../Components/Text/TextBlock';
import KeepMeUpdated from '../Components/Forms/KeepMeUpdated';
import Image from '../Images/wedding-top.png';
import { Container, Row, Col } from 'reactstrap';


const text = ({
  intro: "Alex & Lydia are Getting Married!",
  subtitle: "MORE INFORMATION COMING SOON..."
});

const headingImage = ({
  src: Image,
  alt: "Illustration of a boquet of flowers"
});

function Holder() {

  return (
    <Container>
      <HeaderImage src={ headingImage.src } alt={ headingImage.alt }/>
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
