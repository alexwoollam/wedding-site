import React from 'react';
import Content  from '../Content/Pages/Accommodation.json';
import {connect} from "react-redux";
import Page from "../Components/Layout/Page";
import Heading from '../Components/Text/Heading';
import TextBlock from '../Components/Text/TextBlock';
import {Row, Col} from "reactstrap";
import ListItem from "../Components/Text/ListItem";
import Bugs from "../Components/Bugs";

const Accommodation = () => {
    let pageSections = [] as  any;
    Object.keys(Content.sections).forEach(function(key) {
        pageSections.push( [key, Content.sections[key]] );
    })

    return (
        <Page>
            <Row>
                <Col>
                    <Bugs/>
                    <Heading main subtitle={Content.subtitle}>{Content.title}</Heading>
                    {
                        pageSections.map((section, key) => {
                            let content = section[1];
                            return (
                                <div className={"section"} key={key}>
                                    <Heading subtitle={content.subtitle}>{content.title}</Heading>
                                    { content.content.paragraphs && content.content.paragraphs.map((paragraph, key) => {
                                        return (
                                            <TextBlock key={key}>{paragraph}</TextBlock>
                                        )
                                    })}
                                    <div className={"section"}>
                                        { content.content.links && content.content.links.map((link, key) => {
                                            return (
                                                <>
                                                    <Bugs/>
                                                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                                    <a
                                                        key={key}
                                                        className={"btn btn-external"}
                                                        target={'_blank'}
                                                        href={link.link}
                                                    >
                                                        {link.text}
                                                    </a>
                                                </>
                                            )
                                        })}
                                    </div>
                                    <ul>
                                        { content.content.list && content.content.list.map((list, key) => {
                                            return (
                                              <>
                                                <ListItem key={key}>{list}</ListItem>
                                                <Bugs/>
                                              </>
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
)(Accommodation);
export { connected as Accommodation };
