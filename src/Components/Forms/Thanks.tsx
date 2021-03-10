import React from 'react';
import Heading from '../Text/Heading';

function Thanks( props:any ) {
    
    const text = ({
        thanks: "Thanks, " + props.name + "!!",
    });
    
    return (
        <div>
            <Heading text={text.thanks} />
        </div>
    );
    
}

export default Thanks;