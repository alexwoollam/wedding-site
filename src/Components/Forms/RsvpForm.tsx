import React, { useState } from 'react';
import GoogleSheets from '../../Controllers/Forms/GoogleSheets';
import ReCAPTCHA from "react-google-recaptcha";
import { Form, Col } from 'reactstrap';
import Content from '../../Content/Forms/Rsvp.json';
import Step1 from './RsvpForm/Step1';
import Step2 from './RsvpForm/Step2';
import Step3 from './RsvpForm/Step3';
import {Form as FormLayout} from '../Layout/Form';
import * as Sentry from '@sentry/browser';
import {useHistory} from "react-router-dom";

interface RsvpInterface {
    name: string,
    email: string,
    availability: string,
    allergy: string,
    allergy_details: string,
    vegetarian: string,
    excuse: string,
    is_other_guests: boolean|null,
    other_guests: Array<OtherGuestInterface>,
    form: boolean,
}

interface OtherGuestInterface {}

function RsvpForm() {

    const [step, setStep] = useState(1);
    const [randomNumber] = useState( Math.floor(Math.random() * 10));

    const SPREADSHEET_ID:string = process.env.REACT_APP_SPREADSHEET_ID!;
    const SHEET_ID:string = process.env.REACT_APP_SHEET_ID!;
    const RECAPTCHAKEY:string = process.env.REACT_APP_RECAPTCHAKEY!;

    const [user, setUser] = useState<RsvpInterface>({
        name: '',
        email: '',
        availability: 'yes',
        allergy: 'no',
        allergy_details: '',
        vegetarian: 'beef',
        excuse: '',
        is_other_guests: false,
        other_guests: [],
        form: false,
    });

    const user_data = {
        Name: user.name,
        Email: user.email === '' ? 'Not Provided' : user.email,
        Availability: user.availability,
        Excuse: user.excuse === '' ? 'n/a' : user.excuse,
        Has_Additional: user.other_guests.length > 0 ? 'Yes' : 'No',
        Allergies: user.allergy,
        Allergy_Details: user.allergy_details === '' ? 'n/a' : user.allergy_details,
        Food_Pref: user.vegetarian,
    };

    const history = useHistory();

    const handlePostForm = ( event:any ) => {

        /* istanbul ignore next */
        event.preventDefault();
        /* istanbul ignore next */
        setUser({...user, form: true});
        if( user.other_guests.length > 0 ) {
            user.other_guests.map((guest: any) => {
                const guest_data = {
                    Name: guest.name,
                    Email: guest.email === '' ? 'Not Provided' : guest.email,
                    Availability: guest.availability,
                    Excuse: 'n/a',
                    Has_Additional: 'Guest of ' + user.name,
                    Allergies: guest.allergy,
                    Allergy_Details: guest.allergy_details === '' ? 'n/a' : guest.allergy_details,
                    Food_Pref: guest.vegetarian
                };
                Sentry.captureMessage('Form submitted', {
                    extra: {
                        guest_data: guest_data,
                    }
                });
                return GoogleSheets(guest_data, SPREADSHEET_ID, SHEET_ID);
            });
        }
        GoogleSheets(user_data, SPREADSHEET_ID, SHEET_ID);
        console.log('Form submitted', user_data);
        Sentry.captureMessage('Form submitted', {
            extra: {
                user_data: user_data,
                user: user,
            }
        });
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

    const gotoThanks = ( event:any ) => {
        history.push('/thanks');
    }

    const updateUser = ( event:any ) => {
        /* istanbul ignore next */
        setUser({...user, [event.target.name]: event.target.value});
    }

    const addOtherGuest = ( event: any, index ) => {
        event.preventDefault();
        /* istanbul ignore next */
        let others = user.other_guests;
        setUser({...user, other_guests: [...others, {
                name: '',
                email: '',
                availability: 'yes',
                allergy: 'no',
                allergy_details: '',
                vegetarian: 'beef',
                excuse: '',
            }]});
    }

    const setOtherGuestDetails = (event: any, index) => {
        event.preventDefault();
        let others = user.other_guests;
        if( others[index] ){
            others[index][event.target.name] = event.target.value;
            setUser({...user, other_guests: [...others]});
        }

        let other = {
            [event.target.name]: event.target.value,
            ...others[index]};
        setUser({...user, other_guests: [...others.slice(0, index), other, ...others.slice(index + 1)]});
    }

    const removeOtherGuest = (event: any, index) => {
        event.preventDefault();
        let others = user.other_guests;
        setUser({...user, other_guests: [...others.slice(0, index), ...others.slice(index + 1)]});
    }

    /* istanbul ignore else */
    if( ! user.form ) {
        return (
            <Col className="m-auto mt-3">
                <Form onSubmit={handlePostForm} className="m-auto">
                    <ReCAPTCHA
                        sitekey={RECAPTCHAKEY}
                        size="invisible"
                    />
                    <FormLayout>
                        {
                            step === 1 ?
                                <Step1
                                    setNextStep={handleNextStep}
                                    setPreviousStep={handlePreviousStep}
                                    content={Content.step_1}
                                    updateUser={updateUser}
                                    user={user}
                                    randomNumber={randomNumber}
                                    setUserGuestsTrue={addOtherGuest}
                                    updateOtherGuestDetails={setOtherGuestDetails}
                                    removeOtherGuest={removeOtherGuest}
                                />
                                :
                                step === 2 ?
                                    <Step2
                                        setNextStep={handleNextStep}
                                        setPreviousStep={handlePreviousStep}
                                        updateUser={updateUser}
                                        updateOtherGuestDetails={setOtherGuestDetails}
                                        user={user}
                                        content={Content.step_2}
                                    />
                                    : null
                        }
                    </FormLayout>
                </Form>
            </Col>
        );
    } else if( user.availability === 'no' ) {
        history.push('/oh');
        return null;
    } else {
        return (
            <Col className="m-auto mt-3">
                <Form onSubmit={ handlePostForm } className="m-auto">
                    <ReCAPTCHA
                        sitekey={ RECAPTCHAKEY }
                        size="invisible"
                    />
                    <FormLayout>
                        <Step3
                            setNextStep={ gotoThanks }
                            content={ Content.step_3}
                            user={ user }
                        />
                    </FormLayout>
                </Form>
            </Col>
        )
    }
}

export default RsvpForm;