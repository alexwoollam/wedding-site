import React from 'react';
import './Form.scss';

function Form( props ) {
    const { children } = props;
    return (
        <div className={'w-100 w-md-80 form'}>
            { children }
        </div>
    );
}

export {Form};