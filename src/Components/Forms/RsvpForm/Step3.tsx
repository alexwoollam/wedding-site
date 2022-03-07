import React, { useEffect } from 'react';
import Heading from '../../Text/Heading';
import FormControls from "../../Layout/FormControls";
import {Col, Container, Row} from "reactstrap";
import MyButton from "../../Button";
import {SearchTracks} from "../../Music/SearchTrack";
import Bugs from "../../Bugs";
import Content from "../../../Content/Pages/Music.json";
import TextBlock from "../../Text/TextBlock";

const Step3 = props => {
    const {
        content,
        setNextStep,
    } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Heading main>{Content.title}</Heading>
                    </Col>
                </Row>
                <TextBlock>What song(s) will get you on to the dance floor (or at least awkwardly swaying)? Add them below and once you hit submit it will be automatically added to the play list. If you need more time to think you can skip this bit and return to the music tab at a later date.</TextBlock>
                <FormControls>
                    <MyButton prev is_disabled={true}>{content.back_button}</MyButton>
                    <MyButton next right is_disabled={false} onClick={ setNextStep }>Next</MyButton>
                </FormControls>
                <Row>
                    <Col className={"col-12"}>
                        <SearchTracks/>
                    </Col>
                </Row>
                <Bugs/>
            </Container>
        </>
    );
};


export default Step3;