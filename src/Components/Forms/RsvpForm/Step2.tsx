import React from 'react';
import Heading from '../../Text/Heading';
import TextBlock from "../../Text/TextBlock";
import FormGroup from "../../Layout/FormGroup";
import FormControls from "../../Layout/FormControls";
import {Container, Row, Input, Button} from "reactstrap";

const Step2 = props => {
    const {
        content,
        setPreviousStep,
        user,
        updateUser,
        updateOtherGuestDetails
    } = props;

    console.log(user);

    const firstName = () => {
        let name = user.name;
        if (name) {
            let names = name.split(' ');
            if (names.length > 1) {
                return names[0];
            }
            return name;
        }
    }

    const guestName = name => {
        if (name) {
            let names = name.split(' ');
            if (names.length > 1) {
                return names[0];
            }
            return name;
        }
    }

    return (
        <Container>
            <Heading>{content.title}</Heading>
            <TextBlock>{content.subtitle}</TextBlock>
            <FormGroup enabled>
                <Row>
                    <label htmlFor="dietry">{content.dietary.veg}</label>
                    <Input
                        id="vegitarianSelect"
                        name="vegetarian"
                        type="select"
                        onChange={updateUser}
                    >
                        <option value="beef">Local Beef</option>
                        <option value="vegi">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                    </Input>
                </Row>
            </FormGroup>
            <FormGroup enabled>
                <Row>
                    <label htmlFor="dietry">{firstName()}, {content.dietary.label}</label>
                </Row>
                <Row>
                    <Input
                        id="availabilitySelect"
                        name="allergy"
                        type="select"
                        onChange={updateUser}
                    >
                        <option value="no">{content.dietary.no}</option>
                        <option value="yes">{content.dietary.yes}</option>
                    </Input>
                </Row>
            </FormGroup>
            <FormGroup enabled={user.allergy === 'yes'}>
                <Row>
                    <label htmlFor="dietry_sub_yes">{content.dietary.yes_sub_label}</label>
                    <Input
                        id="dietry_sub_yes"
                        name="allergy_details"
                        type="textarea"
                        onChange={updateUser}
                    ></Input>
                </Row>
            </FormGroup>

            { user.other_guests.map((guest, index) => {
                console.log(guest);
                if( guest.availability !== 'yes'){
                    return null;
                }
                return (
                    <Container className={"other-guests-container"} key={index}>
                        <FormGroup enabled >
                            <Row>
                                <label htmlFor="dietry">Whats would {guestName(guest.name)} prefer?</label>
                                <Input
                                    id="vegitarianSelect"
                                    name="vegetarian"
                                    type="select"
                                    onChange={(event) => updateOtherGuestDetails(event, index)}
                                >
                                    <option value="beef">Local Beef</option>
                                    <option value="vegi">Vegetarian</option>
                                    <option value="vegan">Vegan</option>
                                </Input>
                            </Row>
                        </FormGroup>
                        <FormGroup enabled>
                                <Row>
                                    <label htmlFor="dietry">Does {guestName(guest.name)}, {content.dietary.additional_label}</label>
                                </Row>
                                <Row>
                                    <Input
                                        id="availabilitySelect"
                                        name="allergy"
                                        type="select"
                                        onChange={(event) => updateOtherGuestDetails(event, index)}
                                    >
                                        <option value="no">{content.dietary.no}</option>
                                        <option value="yes">{content.dietary.yes}</option>
                                    </Input>
                                </Row>
                            </FormGroup>
                        <FormGroup enabled={guest.allergy === 'yes'}>
                            <Row>
                                <label htmlFor="dietry_sub_yes">{content.dietary.yes_sub_label}</label>
                                <Input
                                    id="dietry_sub_yes"
                                    name="allergy_details"
                                    type="textarea"
                                    onChange={(event) => updateOtherGuestDetails(event, index)}
                                ></Input>
                            </Row>
                        </FormGroup>
                    </Container>
                )
            })}

            <FormControls>
                <button className={'btn btn-prev'} onClick={ setPreviousStep }>{content.back_button}</button>
                <Button type="submit" className={'btn btn-next'}>
                    {content.submit_button}
                </Button >
            </FormControls>
        </Container>
    );
};


export default Step2;