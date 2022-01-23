import { configureStore } from '@reduxjs/toolkit'
import rsvpReducer from "./Reducers/rsvpReducer";

export const store = configureStore({
    reducer: {
        rsvp: rsvpReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
