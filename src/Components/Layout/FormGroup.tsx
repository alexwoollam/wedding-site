import React from 'react';
import './FormGroup.scss';


function FormGroup( props ) {
    const { children, enabled } = props;
    if( enabled ){
        return (
            <div className={'form-group'}>
                { children }
            </div>
        );
    } else {
        return null;
    }
}

export default FormGroup;