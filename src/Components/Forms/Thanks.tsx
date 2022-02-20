import React from 'react';
import Heading from '../Text/Heading';

function Thanks( props:any ) {
    
    const text = ({
        thanks: "Thanks, " + props.name + "!!",
    });
    
    return (
        <div>
            <Heading>{text.thanks}</Heading>
        </div>
    );
    
}

export default Thanks;