import { ADD_TRACKS } from "../Actions";
import {Reducer} from "redux";

interface TracksState {
    tracks: Array<object>;
}

const initialState: TracksState = {
    tracks: [
        {
            title: "",
            artist: "",
            album: "",
            url: ""
        }
    ]
};

const trackReducer: Reducer = (
    state= initialState, action
): TracksState => {
    switch (action.type) {
        case ADD_TRACKS:
            const newTrack: any = {
                id: Math.random(),
            }
            return {
                ...state,
                rsvp: initialState.tracks.concat(newTrack),
            };
    }
    return state
}

export default trackReducer