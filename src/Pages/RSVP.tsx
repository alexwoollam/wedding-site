import React from 'react';
import {connect} from "react-redux";
import {Col, Row} from "reactstrap";
import Page from "../Components/Layout/Page";
import Heading from "../Components/Text/Heading";
import Content from "../Content/Pages/RSVP.json";
import RsvpForm from "../Components/Forms/RsvpForm";
import Bugs from "../Components/Bugs";

const RSVP = () => {
    return (
        <Page>
            <Row>
                <Col>
                    <Bugs/>
                    <Heading main subtitle={Content.subtitle}>{Content.title}</Heading>
                </Col>
            </Row>
            <Row>
                <RsvpForm/>
            </Row>
        </Page>
    );
}

const connected = connect(
    null,
    null,
)(RSVP);
export { connected as RSVP };