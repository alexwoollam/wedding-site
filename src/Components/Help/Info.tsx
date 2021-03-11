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
        <label data-tip={ props.tooltip } className="font-mono my-6"
        >
            { props.text }
        </label>
        <ReactTooltip />
    </>
  );
}

export default Info;