import React from 'react';
import {connect} from "react-redux";
import Holder from "../Components/Forms/KeepMeUpdated";
import {Col, Row} from "reactstrap";
import Page from "../Components/Layout/Page";
import Heading from "../Components/Text/Heading";
import Content from "../Content/Pages/RSVP.json";
import TextBlock from "../Components/Text/TextBlock";
import RsvpForm from "../Components/Forms/RsvpForm";

const RSVP = () => {
    return (
        <Page>
            <Row>
                <Col>
                    <Heading subtitle={Content.subtitle}>{Content.title}</Heading>
                </Col>
            </Row>
            <Row>
                <RsvpForm/>
            </Row>
        </Page>
    );
}


function mapStateToProps() {
   //get_user_enrolments: () => dispatch(FetchUserEnrolments({ type: "LOAD_USER_ENROLMENTS" })),
}

function mapDispatchToProps() {
    //user_enrolments_state: state.enroled_challenges,
}

const connected = connect(
    null,
    null,
)(RSVP);
export { connected as RSVP };