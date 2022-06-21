import React from 'react';

function MonzoButton(props)
{
    const { title, cost } = props;

    const gotomonzo = () =>{
        window.location.href = 'https://monzo.me/alexanderjameshenrywoollam?amount=' + cost + '&d=' + title;
    }

    return(
        <div className={"monzo-button"} onClick={gotomonzo}>Monzo.me</div>
    );
}

export default MonzoButton;