import { ADD_RSVP } from "../Actions";
import {AnyAction, Reducer} from "redux";

interface RsvpState {
}

const initialState: RsvpState = {
    rsvp: []
};

const defaultState = {
    rsvp: [],
};

const rsvpReducer: Reducer = (
    state=initialState, action
): RsvpState => {
    switch (action.type) {
        case ADD_RSVP:
            const newRsvp: any = {
                id: Math.random(),
            }
            return {
                ...state,
                rsvp: defaultState.rsvp.concat(newRsvp),
            };
    }
    return state
}

export default rsvpReducer