import React from 'react';
import './Heading.scss';

function Heading( props ) {
  const { children, subtitle, main } = props;
  return (
      <div className={'heading'}>
          {
              main ?
                  <h1
                      className="text-grey-700 font-serif text-3xl text-center heading-text--main"
                      data-testid="text-block"
                  >
                      { children }
                  </h1>
                  :
                  <h2
                      className="text-grey-700 font-serif text-3xl text-center heading-text"
                      data-testid="text-block"
                  >
                      { children }
                  </h2>
          }
          { subtitle &&
            <span  className={'heading-subtext'}>{ subtitle }</span>
          }
    </div>
  );
}

export default Heading;