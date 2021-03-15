import React, { useState } from 'react';
import GoogleSheets from '../../Controllers/Forms/GoogleSheets';
import ReCAPTCHA from "react-google-recaptcha";
import Info from '../Help/Info';
import { Button, Form, Input, Col } from 'reactstrap';
import Thanks from './Thanks';

export function Submit( props:any ) {
    if( props.name && props.email ){
        return (
            <Button 
                type="submit" 
                className="my-3 transform bg-indigo-600 hover:bg-indigo-300 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
                aria-expanded="false"
                data-testid="submit-button"
                >
                Submit
            </Button>
        )
    }
    return null;
}



const text = {
    text: 'Keep me updated',
    tooltip: 'We will use this information to keep you updated when important information has been added to this site!'
}

interface KeepMeUpdatedInterface {
    name: string,
    email: string,
    form: boolean,
}

function KeepMeUpdated() {

    const SPREADSHEET_ID:string = process.env.REACT_APP_SPREADSHEET_ID!;
    const SHEET_ID:string = process.env.REACT_APP_SHEET_ID!;
    const RECAPTCHAKEY:string = process.env.REACT_APP_RECAPTCHAKEY!;
    
    const [user, setUser] = React.useState<KeepMeUpdatedInterface>({
        name: '',
        email: '',
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

    const setTheEmail = ( event:any ) => {
        /* istanbul ignore next */
        setUser({...user, email: event.target.value});
    }

    const setTheName = ( event:any ) => {
        /* istanbul ignore next */
        setUser({...user, name: event.target.value});
    }

    /* istanbul ignore else */
    if( ! user.form ){
        return (
            <Col md={6}
                className="m-auto mt-3"
            >
                <Form onSubmit={ handlePostForm } className="m-auto max-w-md my-10">
                
                <Info text={ text.text } tooltip={ text.tooltip }/>
    
                <Input 
                id='name'
                type="text" 
                className="mb-3 p-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Arya Stark"
                onChange={ setTheName }
                ></Input>
    
                <Input
                id='email'
                type="email" 
                className="p-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="arya_stark@winterfell.gov"
                onChange={ setTheEmail }
                ></Input>

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

export default KeepMeUpdated;