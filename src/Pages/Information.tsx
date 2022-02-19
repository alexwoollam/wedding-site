import React from 'react';
import {connect} from "react-redux";
import Page from '../Components/Layout/Page'
import {Col, Row} from "reactstrap";
import Heading from "../Components/Text/Heading";
import Content from "../Content/Pages/Information.json";
import TextBlock from "../Components/Text/TextBlock";


const Information = () => {

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
)(Information);
export { connected as Information };