import React from 'react';
import Heading from '../../Text/Heading';
import TextBlock from "../../Text/TextBlock";
import FormGroup from "../../Layout/FormGroup";
import FormControls from "../../Layout/FormControls";
import {Row, Col} from "reactstrap";

const Step1 = props => {
    const {
        content,
        setPreviousStep,
        setNextStep,
        setUser,
        user,
        randomNumber,
        setUserGuestsTrue,
        updateOtherGuest,
        removeOtherGuest
    } = props;


    return (
        <>
            <Heading>{content.title}</Heading>
            <TextBlock>{content.subtitle}</TextBlock>
            <FormGroup enabled>
                <label htmlFor="rsvp-name">{content.name.label}</label>
                <input
                    type="text"
                    className="form-control"
                    id="rsvp-name"
                    name='name'
                    value={ user.name }
                    placeholder={content.name.placeholder[randomNumber]}
                    onChange={setUser}
                />
            </FormGroup>

            <FormGroup enabled={user.name.length > 3}>
                <label htmlFor="rsvp-name">{content.email.label}</label>
                <input
                    type="text"
                    className="form-control"
                    id="rsvp-name"
                    name='email'
                    value={ user.email }
                    placeholder={content.email.placeholder[randomNumber]}
                    onChange={setUser}
                />
                <span className="sub-label">{content.email.sub_label}</span>
            </FormGroup>
            <FormGroup enabled={user.other_guests.length > 0}>
                <label htmlFor="rsvp-other-guest-name">{ user.other_guests.length > 1 ? content.other_guests.label_s : content.other_guests.label }</label>
                {
                    user.other_guests.map((guest, index) => {
                        return (
                            <Row className={"other-guests-row"} key={index} style={{marginBottom: '20px'}}>
                                <Col xs={10}>

                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rsvp-name"
                                        name='other_guests'
                                        value={ guest.name }
                                        placeholder={content.name.placeholder[randomNumber + 1 + index]}
                                        onChange={ (event) => updateOtherGuest(event, index)}
                                    />
                                </Col>
                                <Col xs={2} style={{alignSelf: 'end'}}>
                                    <button className={'btn btn-remove'} onClick={(event) => removeOtherGuest(event, index)}>
                                        remove
                                    </button>
                                </Col>
                            </Row>
                        )
                    })
                }
            </FormGroup>
            <FormGroup enabled={user.name.length > 3}>
                <Row>
                    <Col>
                        <label htmlFor="rsvp-name" style={{textAlign: 'right', width: '100%', height: '100%', lineHeight: '2.5'}}>{content.add_plus_one_button_label}</label>
                    </Col>
                    <Col xs={2}>
                        <button className={'btn btn-add-guest'} name='is_other_guests' onClick={ setUserGuestsTrue }>{content.add_plus_one_button}</button>
                    </Col>
                </Row>
            </FormGroup>

            <FormControls>
                <button className={'btn btn-prev'} disabled={true} onClick={ setPreviousStep }>{content.back_button}</button>
                <button className={'btn btn-next'} onClick={ setNextStep }>{content.submit_button}</button>
            </FormControls>
        </>
    );
};


export default Step1;