import React from 'react';

function Page( props ) {
    const { children } = props;
    return (
        <div className={props.classList}>
            { children }
        </div>
    );
}

export default Page;