import React from 'react';
import Heading from '../Components/Text/Heading';
import {SearchTracks} from '../Components/Music/SearchTrack';
import { Row, Col } from 'reactstrap';
import Content from "../Content/Pages/Music.json";
import TextBlock from "../Components/Text/TextBlock";
import Page from "../Components/Layout/Page";

function Music() {
  return (
      <Page>
          <Row>
              <Col>
                  <Heading subtitle={Content.subtitle}>{Content.title}</Heading>
                  <TextBlock>{Content.intro}</TextBlock>
              </Col>
          </Row>
          <Row>
              <Col>
                  <SearchTracks/>
              </Col>
          </Row>
      </Page>
  );
}

export default Music;