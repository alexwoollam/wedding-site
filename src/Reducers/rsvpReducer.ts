import { ADD_RSVP } from "../Actions";
import {Reducer} from "redux";

interface RsvpState {
    rsvp: Array<object>;
}

const initialState: RsvpState = {
    rsvp: [

    ]
};

const rsvpReducer: Reducer = (
    state= initialState, action
): RsvpState => {
    switch (action.type) {
        case ADD_RSVP:
            const newRsvp: any = {
                id: Math.random(),
            }
            return {
                ...state,
                rsvp: initialState.rsvp.concat(newRsvp),
            };
    }
    return state
}

export default rsvpReducer