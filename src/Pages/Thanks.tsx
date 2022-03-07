import React from 'react';
import {connect} from "react-redux";
import {Col, Container, Row} from "reactstrap";
import Page from "../Components/Layout/Page";
import Heading from "../Components/Text/Heading";
import Content from "../Content/Pages/RSVP.json";
import OtherContent from "../Content/Forms/Rsvp.json";
import Bugs from "../Components/Bugs";
import TextBlock from "../Components/Text/TextBlock";
import {useHistory} from "react-router-dom";

const Thanks = () => {

    const history = useHistory();

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
                        <TextBlock>{OtherContent.step_3.subtitle}</TextBlock>
                        <TextBlock>{OtherContent.step_3.accommodation_bumph_one}</TextBlock>
                        <TextBlock>{OtherContent.step_3.accommodation_bumph_two} <button style={{cursor: 'pointer'}} onClick={() => history.push(OtherContent.step_3.accommodation_biump_link_link)}>here.</button></TextBlock>
                        <TextBlock>{OtherContent.step_3.accommodation_bumph_three}</TextBlock>
                        <TextBlock>{OtherContent.step_3.accommodation_bumph_four} <button style={{cursor: 'pointer'}} onClick={() => history.push(OtherContent.step_3.accommodation_biump_link_link_two)}>here.</button></TextBlock>
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