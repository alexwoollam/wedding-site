import React from 'react';
import {connect} from "react-redux";
import Page from '../Components/Layout/Page'
import {Col, Row} from "reactstrap";
import Heading from "../Components/Text/Heading";
import Content from "../Content/Pages/Information.json";
import TextBlock from "../Components/Text/TextBlock";
import ListItem from "../Components/Text/ListItem";

const Information = () => {

    let pageSections = [] as  any;
    Object.keys(Content.sections).forEach(function(key) {
        pageSections.push( [key, Content.sections[key]] );
    })

    return (
        <Page>
            <Row>
                <Col>
                    <Heading main subtitle={Content.subtitle}>{Content.title}</Heading>
                    {
                        pageSections.map((section, key) => {
                            let content = section[1];
                            console.log(content);
                            return (
                                <div className={"section"} key={key}>
                                    <Heading>{content.title}</Heading>
                                    { content.content.paragraphs && content.content.paragraphs.map((paragraph, key) => {
                                        return (
                                            <TextBlock key={key}>{paragraph}</TextBlock>
                                        )
                                    })}
                                    <ul>
                                        { content.content.list && content.content.list.map((list, key) => {
                                            return (
                                                <ListItem key={key}>{list}</ListItem>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </Page>
    );
}

const connected = connect(
    null,
    null,
)(Information);
export { connected as Information };