import React from 'react';
import './FooterImage.scss';

function FooterImage() {
    return (
        <div className={"site-footer"}>
            <div className={"d-none d-md-block site-footer-left site-footer-middle"}></div>
            <div className={"site-footer-right  site-footer-middle"}></div>
        </div>
    );
}

export default FooterImage;