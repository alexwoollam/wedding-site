import React from 'react';
import Heading from '../../Text/Heading';
import TextBlock from "../../Text/TextBlock";
import FormControls from "../../Layout/FormControls";
import FormGroup from "../../Layout/FormGroup";
import {CardLink} from "reactstrap";

const getFirstName = (name) =>{
    const suffix = [ 'mr', 'ms', 'miss', 'mrs', 'dr', 'prof', 'rev', 'sr', 'jr'];
    let first_name = name.split(' ')[0];
    if( suffix.includes( first_name.toLowerCase() ) ){
        first_name = name.split(' ')[1];
    }
    return first_name;
}

const Step3 = props => {
    const {
        content,
        setNextStep,
        setPreviousStep,
        user
    } = props;

    return (
        <>
            <Heading>{content.title} { getFirstName(user.name) }</Heading>
            <FormGroup enabled>
                <TextBlock>{content.accommodation_bumph_one}</TextBlock>
                <TextBlock>{content.accommodation_bumph_two}</TextBlock>
                <CardLink>{content.accommodation_bumph_link_text}</CardLink>
            </FormGroup>
            <FormControls>
                <button className={'btn btn-prev'} onClick={ setPreviousStep }>{content.back_button}</button>
                <button className={'btn btn-next'} onClick={ setNextStep }>{content.submit_button}</button>
            </FormControls>
        </>
    );
};


export default Step3;