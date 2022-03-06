import React from 'react';
import {Row, Col, Media} from 'reactstrap';
import Img0 from '../../Images/bugs/bug_1.png';
import Img1 from '../../Images/bugs/bug_2.png';
import Img2 from '../../Images/bugs/bug_3.png';
import Img3 from '../../Images/bugs/bug_4.png';
import Img4 from '../../Images/bugs/bug_5.png';

function Bugs( ) {

    const bugs = [
        {
            src: Img0,
            alt: 'Bug 1'
        },
        {
            src: Img1,
            alt: 'Bug 2'
        },
        {
            src: Img2,
            alt: 'Bug 3'
        },
        {
            src: Img3,
            alt: 'Bug 4'
        },
        {
            src: Img4,
            alt: 'Bug 5'
        }
    ];

    const randomBug = () => {
        const random = Math.floor(Math.random() * bugs.length);
        return bugs[random]['src'];
    }

    const randomInt = () => {
        const random = Math.floor(Math.random() * (590 - -110 + 1)) + -100;
        console.log(random);
        return random;
    }

    return (
        <Row
            className="flex justify-center h-3"
            style={{ maxWidth: '100%', overflow: 'hidden', margin: '0px' }}
        >
            <Col
                className="col-sm-12 col-md-6 m-auto"
            >
                <Media center="true">
                    <Media
                        object
                        src={randomBug()}
                        alt="Bug"
                        style={
                            {
                                maxWidth: '30px',
                                height: '100%',
                                objectFit: 'cover',
                                transform: `translateX(${randomInt()}px)`,
                            }
                        }
                    />
                </Media>
            </Col>
        </Row>
    );
}

export default Bugs;