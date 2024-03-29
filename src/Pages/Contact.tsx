import React from 'react';
import {connect} from "react-redux";
import Page from "../Components/Layout/Page";
import {Col, Row} from "reactstrap";
import Heading from "../Components/Text/Heading";
import Content from "../Content/Pages/Contact.json";
import Bugs from "../Components/Bugs";
import TextBlock from "../Components/Text/TextBlock";

const Contact = () => {

    return (
        <Page>
            <Row>
                <Col>
                    <Bugs/>
                    <Heading main >{Content.title}</Heading>
                    <TextBlock>{Content.subtitle}</TextBlock>
                    <Bugs/>
                    <a href={"mailto: lydia_king@hotmail.co.uk"}>lydia_king@hotmail.co.uk</a>
                    <TextBlock>Lydia: 07929 391074</TextBlock>
                    <TextBlock>(Or if you are feeling lucky) Alex: 07775 724209</TextBlock>
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