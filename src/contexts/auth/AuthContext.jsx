import {createContext} from "react";

export const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null
}

export const AuthContext = createContext(
    {
        ...initialState,
        dispatch: () => null
    }
);