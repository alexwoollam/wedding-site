import React from 'react';
import Content  from '../Content/Pages/Accommodation.json';
import {connect} from "react-redux";
import Page from "../Components/Layout/Page";
import Heading from '../Components/Text/Heading';
import TextBlock from '../Components/Text/TextBlock';
import {Row, Col} from "reactstrap";

const Accommodation = () => {

    return (
        <Page>
            <Row>
                <Col>
                    <Heading subtitle={Content.subtitle}>{Content.title}</Heading>
                    <TextBlock>{Content.subtitle}</TextBlock>
                </Col>
            </Row>
        </Page>
    );
}

const connected = connect(
    null,
    null,
)(Accommodation);
export { connected as Accommodation };
