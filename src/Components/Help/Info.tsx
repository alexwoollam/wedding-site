import React from 'react';
import ReactTooltip from 'react-tooltip';

interface TextSent {
    tooltip: string,
    text: string,
}

function Info( props:TextSent ) {
  
  if( ! props.text ){
    return null;
  }
  return (
    <>
        <label data-tip data-for='registerTip' data-testid="info" className="font-mono my-6"
        >
            { props.text }
        </label>
        <ReactTooltip id="registerTip" place="top" effect="solid">
        { props.tooltip }
        </ReactTooltip>
    </>
  );
}

export default Info;