import PropTypes from 'prop-types';
import React from 'react';

GuestGuard.propTypes = {
    children: PropTypes.node,
};

function GuestGuard({ children }) {
    return (
        <React.Fragment>{children}</React.Fragment>
    );
}

export default GuestGuard;