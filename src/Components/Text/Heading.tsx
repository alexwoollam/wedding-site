import React from 'react';
import './Heading.scss';

function Heading( props ) {
  const { children, subtitle } = props;
  return (
      <div className={'heading'}>
        <h1
          className="text-grey-700 font-serif text-3xl text-center heading-text"
          data-testid="text-block"
        >
            { children }
        </h1>
        <span  className={'heading-subtext'}>{ subtitle }</span>
    </div>
  );
}

export default Heading;