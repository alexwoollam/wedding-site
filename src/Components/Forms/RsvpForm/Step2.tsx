import React from 'react';
import Heading from '../../Text/Heading';
import FormControls from "../../Layout/FormControls";

const Step2 = props => {
    const { content, setNextStep, setPreviousStep } = props;

    return (
        <>
            <Heading>{content.title}</Heading>
            <FormControls>
                <button className={'btn btn-prev'} onClick={ setPreviousStep }>{content.back_button}</button>
                <button className={'btn btn-next'} onClick={ setNextStep }>{content.submit_button}</button>
            </FormControls>
        </>
    );
};


export default Step2;