import React, { useState } from 'react';

function KeepMeUpdated() {
    const [ name, setName ] = useState(false);
    const [ email, setEmail ] = useState(false);

    const handlePostForm = () => {
        console.log( 'name: ' + name );
        console.log( 'email: ' + email );
    }

    const setTheEmail = ( event:any ) => {
        setEmail(event.target.value);
    }

    const setTheName = ( event:any ) => {
        setName(event.target.value);
    }

    return (
        <form onSubmit={ handlePostForm } className="m-auto max-w-md my-10">
            <label
            className="font-mono my-6"
            >Keep me updated:</label>

            <input 
            type="text" 
            className="mb-3 p-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder="John Doe"
            onChange={ setTheName }
            ></input>

            <input 
            type="email" 
            className="p-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder="john@example.com"
            onChange={ setTheEmail }
            ></input>

            <button 
                type="submit" 
                className="my-3 bg-indigo-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
                aria-expanded="false"
                >
                Submit
            </button>
        </form>
    );
}

export default KeepMeUpdated;