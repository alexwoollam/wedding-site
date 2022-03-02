import React from 'react';
import Heading from '../../Text/Heading';
import TextBlock from "../../Text/TextBlock";
import FormControls from "../../Layout/FormControls";
import {Container} from "reactstrap";
import MyButton from "../../Button";

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
        user
    } = props;

    return (
        <>
            <Container>
                <Heading main>{content.title} { getFirstName(user.name) }</Heading>
                    <Container>
                        <TextBlock>{content.accommodation_bumph_one}</TextBlock>
                        <TextBlock>{content.accommodation_bumph_two}</TextBlock>
                        <TextBlock>{content.accommodation_bumph_three}</TextBlock>
                    </Container>
            </Container>
            <FormControls>
                <MyButton prev is_disabled={true}>{content.back_button}</MyButton>
                <MyButton next right is_disabled={false} onClick={ setNextStep }>{content.submit_button}</MyButton>
            </FormControls>
        </>
    );
};


export default Step3;