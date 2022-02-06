import React from 'react';
import {connect} from "react-redux";
import Page from "../Components/Layout/Page";
import {Col, Row} from "reactstrap";
import Heading from "../Components/Text/Heading";
import Content from "../Content/Pages/Contact.json";
import TextBlock from "../Components/Text/TextBlock";

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


function mapStateToProps() {
    //get_user_enrolments: () => dispatch(FetchUserEnrolments({ type: "LOAD_USER_ENROLMENTS" })),
}

function mapDispatchToProps() {
    //user_enrolments_state: state.enroled_challenges,
}

const connected = connect(
    null,
    null,
)(Contact);
export { connected as Contact };