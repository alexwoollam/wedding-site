import React from 'react';

function BacsButton(props)
{
    const { title, cost } = props;

    const gotomonzo = () =>{
        window.location.href = 'https://monzo.me/alexanderjameshenrywoollam?amount=' + cost + '&d=' + title;
    }

    return(
        <div className={"monzo-button"} onClick={gotomonzo}>Bacs</div>
    );
}

export default BacsButton;