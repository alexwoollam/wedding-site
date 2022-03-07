import React from 'react';
import {connect} from "react-redux";
import {Container, Row} from "reactstrap";
import Page from "../Components/Layout/Page";
import Heading from "../Components/Text/Heading";
import TextBlock from "../Components/Text/TextBlock";

const NotThanks = () => {
    return (
        <Page>
            <Row>
                <Container>
                    <Heading main>Thanks for letting us know</Heading>
                    <Container>
                        <TextBlock>We will be sorry not seeing you there.</TextBlock>
                        <p style={{marginBottom: "400px"}}></p>
                    </Container>
                </Container>
            </Row>
        </Page>
    );
}

const connected = connect(
    null,
    null,
)(NotThanks);
export { connected as NotThanks };