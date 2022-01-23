export const RsvpAction = {
  RSVP_REQUEST: 'RSVP_REQUEST',
  RSVP_SUCCESS: 'RSVP_SUCCESS',
  RSVP_FAILURE: 'RSVP_FAILURE',
};

export function ADD_RSVP(){
    return { type: 'ADD_RSVP' };
}

export function DELETE_RSVP(){
    return { type: 'DELETE_RSVP' };
}

export function UPDATE_RSVP(){
    return { type: 'UPDATE_RSVP' };
}
