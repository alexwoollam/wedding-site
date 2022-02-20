import React from 'react';
import Heading from '../../Text/Heading';
import TextBlock from "../../Text/TextBlock";
import FormControls from "../../Layout/FormControls";
import {Button, Container} from "reactstrap";

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
        setPreviousStep,
        user
    } = props;

    return (
        <Container>
            <Heading main>{content.title} { getFirstName(user.name) }</Heading>
                <Container>
                    <TextBlock>{content.accommodation_bumph_one}</TextBlock>
                    <TextBlock>{content.accommodation_bumph_two}</TextBlock>
                </Container>

            <FormControls>
                <button className={'btn btn-prev'} onClick={ setPreviousStep }>{content.back_button}</button>
                <Button type="submit" className={'btn btn-next'}>
                    {content.submit_button}
                </Button >
            </FormControls>
        </Container>
    );
};


export default Step3;