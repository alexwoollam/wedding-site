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
                            if(pageSection[key] === 'intro')
                            {
                                return (
                                    <div className={"section"} key={key}>
                                        <Bugs/>
                                        { pageSection[1] && pageSection[1].map((paragraph, key) => {
                                            return (
                                                <TextBlock key={key}>{paragraph}</TextBlock>
                                            )
                                        })}
                                    </div>
                                );
                            }
                            if( typeof(process.env.REACT_APP_ACC_NUMBER) === 'string' && typeof(process.env.REACT_APP_SORT_CODE) === 'string' )
                            {
                                // FYI: I 100% disagree with this idea!
                                return (
                                    <>
                                        <TextBlock key={key}>Name: Dr Lydia King</TextBlock>
                                        <TextBlock key={key}>Account: { process.env.REACT_APP_ACC_NUMBER }</TextBlock>
                                        <TextBlock key={key}>Sort Code: { process.env.REACT_APP_SORT_CODE }</TextBlock>
                                    </>
                                )
                            }
                            if(pageSection[0] === "gifts")
                            {
                                return(
                                    <div className={"section gift-section"} key={key}>
                                        { pageSection[1] && pageSection[1].map((gift, key) => {
                                            if( gift.count === 0){
                                                return;
                                            }
                                            return (
                                                <Gift
                                                    key={key}
                                                    title={gift.title}
                                                    details={gift.details}
                                                    cost={gift.cost}
                                                    count={gift.count}
                                                    image={gift.image}
                                                />
                                            );
                                            return;
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