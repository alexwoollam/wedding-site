import React from 'react';
import {connect} from "react-redux";
import {Col, Row} from "reactstrap";
import Page from "../Components/Layout/Page";
import Heading from "../Components/Text/Heading";
import Content from "../Content/Pages/Home.json";
import Image from "../Components/Image";
import Countdown, { zeroPad } from 'react-countdown';
import UsAgain from "../Images/us_3.jpg";
import Bugs from "../Components/Bugs";
import TextBlock from "../Components/Text/TextBlock";

const image = () => {
    const images = [UsAgain];

    return images[Math.floor(Math.random() * images.length)];

}

const renderer = ({ days, hours, minutes }) => (
    <Heading main>{days} days, {zeroPad(hours)} hours and {zeroPad(minutes)} mins!</Heading>
);

const Home = () => {
    return (
        <Page>
            <Row>
                <Col>
                    <Heading main>{Content.title}</Heading>
                    <Bugs/>
                    <Image
                        src={image()}
                        alt={"Lydia & Alex, encase you forgot who we are."}
                    />
                    <br/>
                    <Bugs/>
                    <Countdown
                        date={"2022-08-06T14:00:00.000Z"}
                        renderer={renderer}
                    />
                    <Heading>{Content.subtitle}</Heading>
                   <TextBlock>Kingsettle Stud, Cholderton, SP40DX</TextBlock>
                    <Bugs/>
                </Col>
            </Row>
        </Page>
    );
}

const connected = connect(
    null,
    null,
)( Home );
export { connected as Home };