import React from 'react';
import Heading from '../Components/Text/Heading';
import {SearchTracks} from '../Components/Music/SearchTrack';
import { Row, Col } from 'reactstrap';
import Content from "../Content/Pages/Music.json";
import TextBlock from "../Components/Text/TextBlock";
import Page from "../Components/Layout/Page";
import Bugs from "../Components/Bugs";

function Music() {
  return (
      <Page>
          <div className={"section"} style={{ marginBottom: '120px'}}>
              <Row>
                  <Col>
                      <Bugs/>
                      <Heading main subtitle={Content.subtitle}>{Content.title}</Heading>
                      <TextBlock>{Content.intro}</TextBlock>
                  </Col>
              </Row>
              <Row className={"w-100"}>
                  <Col className={"col-12"}>
                      <SearchTracks/>
                  </Col>
              </Row>
          </div>
      </Page>
  );
}

export default Music;