import React from 'react';
import {connect} from "react-redux";
import {Col, Row} from "reactstrap";
import Page from "../Components/Layout/Page";
import Heading from "../Components/Text/Heading";
import Gift from "../Components/Gifts/Gift";
import Content from "../Content/Pages/Gifts.json";
import TextBlock from "../Components/Text/TextBlock";
import Bugs from "../Components/Bugs";

const Gifts = () => {

    let pageSections = [] as any;
    Object.keys(Content.sections).forEach(function(key) {
        pageSections.push( [key, Content.sections[key]] );
    })

    return (
        <Page>
            <Row>
                <Col>
                    <Bugs/>
                    <Heading main >{Content.title}</Heading>
                    {
                        pageSections.map((pageSection, key) => {
                            if(pageSection[0] === 'intro')
                            {
                                return (
                                    <>
                                        <div className={"section"} key={key}>
                                            <Bugs/>
                                            { pageSection[1] && pageSection[1].map((paragraph, key) => {
                                                return (
                                                    <TextBlock key={key}>{paragraph}</TextBlock>
                                                )
                                            })}
                                        </div>
                                        <div key={key}>
                                            <TextBlock>Account: { process.env.REACT_APP_ACC_NUMBER }</TextBlock>
                                            <TextBlock>Sort Code: { process.env.REACT_APP_SORT_CODE }</TextBlock>
                                        </div>
                                    </>
                                );
                            } else if( pageSection[0] === "gifts" ) {
                                return(
                                    <div className={"section gift-section"} key={key}>
                                        { pageSection[1] && pageSection[1].map((gift, key) => {
                                            return (
                                                <Gift
                                                    key={'gift-' + key}
                                                    title={gift.title}
                                                    details={gift.details}
                                                    cost={gift.cost}
                                                    count={gift.count}
                                                    image={gift.image}
                                                />
                                            );
                                        })}
                                    </div>

                                );
                            }
                            return null;
                        })
                    }
                    <Bugs/>
                </Col>
            </Row>
        </Page>
    );
}

const connected = connect(
    null,
    null,
)(Gifts);
export { connected as Gifts };