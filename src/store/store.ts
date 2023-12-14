import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import BasketSlice from "./reducer/BasketSlice";

const rootReducer = combineReducers({
    BasketSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
