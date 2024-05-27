import PropTypes from 'prop-types';

GuestGuard.propTypes = {
    children: PropTypes.node,
};

function GuestGuard({children}) {
    return (
        {children}
    );
}

export default GuestGuard;