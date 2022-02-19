import React from 'react';
import {connect} from "react-redux";
import Page from "../Components/Layout/Page";
import {Col, Row} from "reactstrap";
import Heading from "../Components/Text/Heading";
import Content from "../Content/Pages/Contact.json";

const Contact = () => {

    return (
        <Page>
            <Row>
                <Col>
                    <Heading subtitle={Content.subtitle}>{Content.title}</Heading>

                </Col>
            </Row>
        </Page>
    );
}

const connected = connect(
    null,
    null,
)(Contact);
export { connected as Contact };