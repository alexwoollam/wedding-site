import React from 'react';
import './Gift.scss';
import Images from "../../Images/gifts/";

function Gift( props ) {
    const { title, details, cost, image } = props;

    const getImg = (img) =>{
        return 'url('+Images(img)+')';
    }

    return (
        <div className="gift">
            <div className="gift-image" style={{ 'backgroundImage': getImg(image)}}></div>
            <div className="gift-bottom">
                <h4 className="gift-title">{ title }</h4>
                <p  className="gift-details">{ details }</p>
                <span className="gift-cost">{ cost > 0 ? '£' + cost : ' ' }</span>
            </div>
        </div>
    );
}

export default Gift;