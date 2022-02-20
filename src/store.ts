import { configureStore } from '@reduxjs/toolkit'
import rsvpReducer from "./Reducers/rsvpReducer";
import tracksReducer from "./Reducers/tracksReducer";

export const store = configureStore({
    reducer: {
        rsvp: rsvpReducer,
        tracks: tracksReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
