import React, { createContext, useContext, useReducer} from "react";
import { useInRouterContext } from "react-router";

// Prepare the dataLayer
export const StateContext = createContext();

// Application wrapper - provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Get information from data Layer
export const useStateValue = () => useContext(StateContext);