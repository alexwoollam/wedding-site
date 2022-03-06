import React from 'react';
import Heading from '../../Text/Heading';
import FormControls from "../../Layout/FormControls";
import {Col, Container, Row} from "reactstrap";
import MyButton from "../../Button";
import {SearchTracks} from "../../Music/SearchTrack";
import Bugs from "../../Bugs";
import Content from "../../../Content/Pages/Music.json";

const Step3 = props => {
    const {
        content,
        setNextStep,
    } = props;

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Heading main subtitle={Content.subtitle}>{Content.title}</Heading>
                    </Col>
                </Row>
                <Row>
                    <Col className={"col-12"}>
                        <SearchTracks/>
                    </Col>
                </Row>
                <Bugs/>
            </Container>
            <FormControls>
                <MyButton prev is_disabled={true}>{content.back_button}</MyButton>
                <MyButton next right is_disabled={false} onClick={ setNextStep }>Next</MyButton>
            </FormControls>
        </>
    );
};


export default Step3;