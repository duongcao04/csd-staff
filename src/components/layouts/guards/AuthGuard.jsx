import PropTypes from 'prop-types';
import useAuth from "@/hooks/useAuth.jsx";
import React from 'react';
import { Navigate } from 'react-router-dom';

AuthGuard
    .propTypes = {
    children: PropTypes.node,
};

function AuthGuard({ children }) {
    const currentUser = useAuth();

    if (!currentUser) {
        return <Navigate to='/auth/login' />
    }

    return (
        <React.Fragment>{children}</React.Fragment>
    );
}

export default AuthGuard;