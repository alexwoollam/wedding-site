import React from 'react';
import './button.scss';

function Button( props ) {
    const {
        children,
        external,
        next,
        prev,
        add_guest,
        is_disabled,
        remove,
        right
    } = props;

    const classConstruct = () => {

        let className = ['btn'];

        external && className.push("btn-external");
        next && className.push("btn-next");
        prev && className.push("btn-prev");
        add_guest && className.push("btn-add-guest");
        remove && className.push("btn-remove");
        is_disabled && className.push("btn-disabled");
        right && className.push("btn-right");

        let string = className.toString();
        return string.replace(/,/g, " ");
    }

    if(children){
        return (
            <button
                className={ classConstruct() }
            >
                { children }
            </button>
        );
    } else {
        return null;
    }
}

export default Button;