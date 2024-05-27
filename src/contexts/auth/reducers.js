import {initialState} from "@/contexts/auth/AuthContext.jsx";

const reducerHandlers = {
    initialize: (state, action) => {
        return {
            ...state,
            isInitialized: true,
            user: action.payload
        }
    },
    signIn: (state, action) => {
        const {user} = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            isInitialized: false,
            user
        }
    },
    signOut: (state) => {
        return {
            ...state,
            isAuthenticated: false,
            isInitialized: false,
            user: null
        }
    }
}

export function reducer(state = initialState, action) {
    if (!reducerHandlers[action.type]) {
        return state
    }

    return reducerHandlers[action.type](state, action);
}