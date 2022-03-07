import React, {useEffect} from 'react';
import Heading from '../../Text/Heading';
import TextBlock from "../../Text/TextBlock";
import FormGroup from "../../Layout/FormGroup";
import FormControls from "../../Layout/FormControls";
import MyButton from "../../Button";
import {Input, Label, Row, Col, Button,Container} from "reactstrap";
import ScrollToTop from "../../../Helpers/ScrollToTop";

const Step1 = props => {
    const {
        content,
        setPreviousStep,
        setNextStep,
        user,
        randomNumber,
        setUserGuestsTrue,
        updateUser,
        updateOtherGuestDetails,
        removeOtherGuest
    } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <ScrollToTop />
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
                    onChange={updateUser}
                />
            </FormGroup>

            <FormGroup enabled={user.name.length > 3}>
                <Label for="availabilitySelect">
                    {content.name.availability}
                </Label>
                <Input
                    id="availabilitySelect"
                    name="availability"
                    type="select"
                    onChange={updateUser}
                >
                    <option value="yes">{content.name.availability_options.availability_yes}</option>
                    <option value="yes">{content.name.availability_options.availability_also_yes}</option>
                    <option value="no">{content.name.availability_options.availability_no}</option>
                    <option value="no">{content.name.availability_options.availability_also_no}</option>
                    <option value="yes">{content.name.availability_options.availability_also_also_yes}</option>
                </Input>
            </FormGroup>

            <FormGroup enabled={user.availability === "no"}>
                <Label for={"excuse"}>Optional message</Label>
                <Input
                    onChange={updateUser}
                    type="textarea"
                    name="excuse"
                />
            </FormGroup>

            <FormGroup enabled={user.name.length > 3 && user.availability !== "no"}>
                <label htmlFor="rsvp-name">{content.email.label}</label>
                <input
                    type="text"
                    className="form-control"
                    id="rsvp-name"
                    name='email'
                    value={ user.email }
                    placeholder={content.email.placeholder[randomNumber]}
                    onChange={updateUser}
                />
                <span className="sub-label">{content.email.sub_label}</span>
            </FormGroup>

            <FormGroup enabled={user.other_guests.length > 0 }>
                <label htmlFor="rsvp-other-guest-name">{ user.other_guests.length > 1 ? content.other_guests.label_s : content.other_guests.label }</label>
                {
                    user.other_guests.map((guest, index) => {
                        return (
                            <Container className={"other-guests-container"} key={index}>
                                <Row className={"other-guests-row"}>
                                    <Col xs={{ size: 12, order: 2 }} sm={{ size: 'auto', order: 1 }} md={{ size: 8 }} lg={{ size: 10 }}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="rsvp-name"
                                            name='name'
                                            defaultValue={guest.name}
                                            placeholder={content.name.placeholder[randomNumber + 1 + index]}
                                            onChange={ (event) => updateOtherGuestDetails(event, index) }
                                        />
                                    </Col>
                                    <Col xs={{ size: 12, order: 1 }} sm={{ size: 2, order: 2 }} md={{ size: 2 }} style={{ marginBottom: '10px', alignSelf: 'end'}}>
                                        <MyButton remove onClick={(event) => removeOtherGuest(event, index)}>
                                            remove
                                        </MyButton>
                                    </Col>
                                </Row>
                                <Row className={"other-guests-row"}>
                                    <Col xs={12}>
                                        <Label for="availabilitySelect">
                                            is {guest.name} available?
                                        </Label>
                                        <Input
                                            id="availabilitySelect"
                                            name="availability"
                                            defaultValue={guest.availability}
                                            type="select"
                                            onChange={(event) => updateOtherGuestDetails(event, index)}
                                        >
                                            <option value="yes">{content.name.availability_options.availability_yes}</option>
                                            <option value="yes">{content.name.availability_options.availability_also_yes}</option>
                                            <option value="no">{content.name.availability_options.availability_no}</option>
                                            <option value="no">{content.name.availability_options.availability_also_no}</option>
                                            <option value="yes">{content.name.availability_options.availability_also_also_yes}</option>
                                        </Input>
                                    </Col>
                                </Row>
                                <Row className={"other-guests-row"} style={{marginBottom: '20px'}}>
                                    <Col xs={12}>
                                        <Label for="availabilitySelect">
                                            Email for {guest.name}
                                        </Label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="rsvp-email"
                                            name='email'
                                            defaultValue={guest.email}
                                            placeholder={"This is optional"}
                                            onChange={(event) => updateOtherGuestDetails(event, index)}
                                        />
                                        <span className="sub-label">{content.email.sub_label}</span>
                                    </Col>
                                </Row>
                            </Container>
                        )
                    })
                }
            </FormGroup>
            <FormGroup enabled={user.name.length > 3 && user.availability !== "no"}>
                <Row style={{ alignItems: 'center' }}>
                    <Col>
                        <label id="additional" htmlFor="rsvp-name" style={{textAlign: 'left', lineHeight: '1.5'}}>{content.add_plus_one_button_label}</label>
                    </Col>
                    <Col xs={6} sm={4} md={2}>
                        <button id="additionalButton" className={'btn btn-add-guest'} name='is_other_guests' onClick={ setUserGuestsTrue }>{content.add_plus_one_button}</button>
                    </Col>
                </Row>
            </FormGroup>
            <FormControls>
                <MyButton prev is_disabled={true} onClick={ setPreviousStep }>{content.back_button}</MyButton>
                { user.availability !== "no" && user.name !== '' ?
                    <MyButton next right is_disabled={false} onClick={ setNextStep }>{content.continue_button}</MyButton> :
                    <Button type="submit" className={'btn btn-next'}>
                        {content.submit_button}
                    </Button >
                }
            </FormControls>
        </>
    );
};


export default Step1;