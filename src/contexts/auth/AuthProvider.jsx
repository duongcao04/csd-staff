import PropTypes from "prop-types";
import {useEffect, useReducer} from "react";
import {AuthContext, initialState} from "@/contexts/auth/AuthContext.jsx";
import {reducer} from "@/contexts/auth/reducers.js";

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function AuthProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        (async () => {
            try {
                dispatch({type: 'signIn'})
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;