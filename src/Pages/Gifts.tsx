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
                    <Heading subtitle={Content.subtitle}>{Content.title}</Heading>
                    <TextBlock>{Content.subtitle}</TextBlock>
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
)(Gifts);
export { connected as Gifts };