import React from 'react';
import {connect} from "react-redux";
import {Col, Container, Row} from "reactstrap";
import Page from "../Components/Layout/Page";
import Heading from "../Components/Text/Heading";
import Content from "../Content/Pages/RSVP.json";
import OtherContent from "../Content/Forms/Rsvp.json";
import Bugs from "../Components/Bugs";
import TextBlock from "../Components/Text/TextBlock";

const Thanks = () => {
    return (
        <Page>
            <Row>
                <Col>
                    <Bugs/>
                    <Heading main subtitle={Content.subtitle}>{Content.title}</Heading>
                </Col>
            </Row>
            <Row>
                <Container>
                    <Heading main>{OtherContent.step_3.title}</Heading>
                    <Container>
                        <TextBlock>{OtherContent.step_3.accommodation_bumph_one}</TextBlock>
                        <TextBlock>{OtherContent.step_3.accommodation_bumph_two}</TextBlock>
                        <TextBlock>{OtherContent.step_3.accommodation_bumph_three}</TextBlock>
                        <a href={OtherContent.step_3.accommodation_bumph_link}>{OtherContent.step_3.accommodation_bumph_link_text}</a>
                    </Container>
                </Container>
            </Row>
        </Page>
    );
}

const connected = connect(
    null,
    null,
)(Thanks);
export { connected as Thanks };