import React, { useState } from 'react';
import GoogleSheets from '../../Controllers/Forms/GoogleSheets';
import Thanks from './Thanks';

function Submit( props:any ) {
    if( props.name && props.email ){
        return (
            <button 
                type="submit" 
                className="my-3 bg-indigo-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
                aria-expanded="false"
                data-testid="submit-button"
                >
                Submit
            </button>
        )
    }
    return null;
}

interface KeepMeUpdatedInterface {
    name: string,
    email: string,
    form: boolean,
  }

function KeepMeUpdated() {

    const SPREADSHEET_ID:string = process.env.REACT_APP_SPREADSHEET_ID!;
    const SHEET_ID:string = process.env.REACT_APP_SHEET_ID!;
    
    const [user, setUser] = useState<KeepMeUpdatedInterface>({
        name: '',
        email: '',
        form: false,
    });

    const user_data = {
        Name: user.name,
        Email: user.email,
    };
      
    const handlePostForm = ( event:any ) => {
        event.preventDefault();

        if( GoogleSheets(user_data, SPREADSHEET_ID, SHEET_ID ) ){
            setUser({...user, form: true});
        };
    }

    const setTheEmail = ( event:any ) => {
        var set_email:string = event.target.value;
        setUser({...user, email: set_email});
    }

    const setTheName = ( event:any ) => {
        setUser({...user, name: event.target.value});
    }

    if( ! user.form ){
        return (
            <form onSubmit={ handlePostForm } className="m-auto max-w-md my-10">
                <label
                className="font-mono my-6"
                >Keep me updated:</label>
    
                <input 
                type="text" 
                className="mb-3 p-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Arya Stark"
                onChange={ setTheName }
                ></input>
    
                <input 
                type="email" 
                className="p-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="arya_stark@winterfell.gov"
                onChange={ setTheEmail }
                ></input>
    
                <Submit name={user.name} email={user.email} />
            </form>
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