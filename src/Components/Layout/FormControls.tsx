import React from 'react';
import './FormControls.scss';


function FormControls( props ) {
    const { children } = props;
    return (
        <div className={'form-controls'}>
            { children }
        </div>
    );
}

export default FormControls;