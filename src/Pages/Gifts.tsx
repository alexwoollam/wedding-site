import React from 'react';
import {connect} from "react-redux";
import {Col, Row} from "reactstrap";
import Page from "../Components/Layout/Page";
import Heading from "../Components/Text/Heading";
import Content from "../Content/Pages/Gifts.json";
import TextBlock from "../Components/Text/TextBlock";

const Gifts = () => {
    return (
        <Page>
            <Row>
                <Col>
                    <Heading main subtitle={Content.subtitle}>{Content.title}</Heading>
                    <TextBlock>{Content.content.intro}</TextBlock>
                </Col>
            </Row>
        </Page>
    );
}

const connected = connect(
    null,
    null,
)(Gifts);
export { connected as Gifts };