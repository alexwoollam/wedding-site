import React from 'react';
import './ListItem.scss';

function ListItem( props ) {
    const { children } = props;
    if(children){
        return (
            <li
                className="list-item text-gray-600 font-sans text-base text-center"
                data-testid="text-block"
            >
                { children }
            </li>
        );
    } else {
        return null;
    }
}

export default ListItem;