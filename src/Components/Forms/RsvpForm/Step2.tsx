import React from 'react';
import Heading from '../../Text/Heading';
import TextBlock from "../../Text/TextBlock";
import FormGroup from "../../Layout/FormGroup";
import FormControls from "../../Layout/FormControls";

const Step2 = props => {
    const {
        content,
        setPreviousStep,
        setNextStep,
    } = props;

    return (
        <>
            <Heading>{content.title}</Heading>
            <TextBlock>{content.subtitle}</TextBlock>
            <FormGroup enabled>
                <label htmlFor="dietry">{content.dietary.label}</label>

                <label htmlFor="dietry_yes">{content.dietary.yes}</label>
                <input id="dietry_yes" type="checkbox"></input>

                <label htmlFor="dietry_yes">{content.dietary.no}</label>
                <input id="dietry_no" type="checkbox"></input>

                <label htmlFor="dietry_sub_yes">{content.dietary.yes_sub_label}</label>
                <input id="dietry_sub_yes" type="text"></input>

                <label htmlFor="dietry">{content.dietary.veg}</label>

                <label htmlFor="dietry_yes">{content.dietary.veg_yes}</label>
                <input id="dietry_yes" type="checkbox"></input>

                <label htmlFor="dietry_yes">{content.dietary.veg_no}</label>
                <input id="dietry_no" type="checkbox"></input>

            </FormGroup>
            <FormControls>
                <button className={'btn btn-prev'} onClick={ setPreviousStep }>{content.back_button}</button>
                <button className={'btn btn-next'} onClick={ setNextStep }>{content.submit_button}</button>
            </FormControls>
        </>
    );
};


export default Step2;