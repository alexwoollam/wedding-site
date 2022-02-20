import React from 'react';
import './Form.scss';

function Form( props ) {
    const { children } = props;
    return (
        <div className={'form ' + props.classList}>
            { children }
        </div>
    );
}

export {Form};