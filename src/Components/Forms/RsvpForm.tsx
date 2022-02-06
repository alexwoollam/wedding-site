import React, { useState, useEffect } from 'react';
import GoogleSheets from '../../Controllers/Forms/GoogleSheets';
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Form, Col } from 'reactstrap';
import Content from '../../Content/Forms/Rsvp.json';
import Step1 from './RsvpForm/Step1';
import Step2 from './RsvpForm/Step2';
import Step3 from './RsvpForm/Step3';
import Thanks from './Thanks';
import {Form as FormLayout} from '../Layout/Form';

export function Submit( props:any ) {
    if( props.name && props.email ){
        return (

            <Button
                type="submit"
                className="my-3 transform bg-indigo-600 hover:bg-indigo-300 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
                data-testid="submit-button"
            > submit</Button>
        )
    }
    return null;
}

interface RsvpInterface {
    name: string,
    email: string,
    is_other_guests: boolean|null,
    other_guests: Array<OtherGuestInterface>,
    form: boolean,
}

interface OtherGuestInterface {
    name: any,
}

function RsvpForm() {

    const [step, setStep] = useState(1);
    const [randomNumber, setRandomNumber] = useState( Math.floor(Math.random() * 10));

    const SPREADSHEET_ID:string = process.env.REACT_APP_SPREADSHEET_ID!;
    const SHEET_ID:string = process.env.REACT_APP_SHEET_ID!;
    const RECAPTCHAKEY:string = process.env.REACT_APP_RECAPTCHAKEY!;

    const [user, setUser] = useState<RsvpInterface>({
        name: '',
        email: '',
        is_other_guests: false,
        other_guests: [],
        form: false,
    });

    const user_data = {
        Name: user.name,
        Email: user.email,
    };

    const handlePostForm = ( event:any ) => {
        /* istanbul ignore next */
        event.preventDefault();

        /* istanbul ignore next */
        if( GoogleSheets(user_data, SPREADSHEET_ID, SHEET_ID ) ){
            setUser({...user, form: true});
        };
    }

    const handlePreviousStep = ( event:any ) => {
        /* istanbul ignore next */
        event.preventDefault();

        /* istanbul ignore next */
        if( step > 1 ){
            setStep(step - 1);
        }
    }

    const handleNextStep = ( event:any ) => {
        /* istanbul ignore next */
        event.preventDefault();

        /* istanbul ignore next */
        setStep(step + 1);
    }

    const handleSetUser = ( event:any ) => {
        /* istanbul ignore next */
        setUser({...user, [event.target.name]: event.target.value});
    }

    const setOtherGuest = (event: any) => {
        event.preventDefault();
        let target = {name: event.target.value};
        setUser({...user, other_guests: [...user.other_guests, target]});
    }

    const updateOtherGuest = (event: any, index) => {

        let others = user.other_guests;
        let other = {...others[index]};
        other.name = event.target.value;
        setUser({...user, other_guests: [...others.slice(0, index), other, ...others.slice(index + 1)]});
    }

    const removeOtherGuest = (event: any, index) => {
        event.preventDefault();
        let others = user.other_guests;
        setUser({...user, other_guests: [...others.slice(0, index), ...others.slice(index + 1)]});
    }

    /* istanbul ignore else */
    if( ! user.form ){
        return (
            <Col className="m-auto mt-3">
                <Form onSubmit={ handlePostForm } className="m-auto">
                    <FormLayout>
                        {
                            step === 1 ?
                                <Step1
                                    setNextStep={ handleNextStep }
                                    setPreviousStep={ handlePreviousStep }
                                    content={ Content.step_1}
                                    setUser={ handleSetUser }
                                    user={ user }
                                    randomNumber={randomNumber}
                                    setUserGuestsTrue={setOtherGuest}
                                    updateOtherGuest={updateOtherGuest}
                                    removeOtherGuest={removeOtherGuest}
                                />
                                :
                                step === 2 ?
                                    <Step2
                                        setNextStep={ handleNextStep }
                                        setPreviousStep={ handlePreviousStep }
                                        content={ Content.step_2}
                                    />
                                    :
                                    step === 3 ?
                                        <Step3
                                            setNextStep={ handleNextStep }
                                            setPreviousStep={ handlePreviousStep }
                                            content={ Content.step_3}
                                        />
                                        :
                                        null
                        }
                    </FormLayout>

                    <ReCAPTCHA
                        sitekey={ RECAPTCHAKEY }
                        size="invisible"
                    />

                    <Submit name={user.name} email={user.email} />
                </Form>
            </Col>
        );
    } else {
        let username : string = user.name;
        return (
            <>
                <Thanks name={username} />
            </>
        )
    }
}

export default RsvpForm;