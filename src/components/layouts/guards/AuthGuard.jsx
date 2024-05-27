import PropTypes from 'prop-types';
import useAuth from "@/hooks/useAuth.jsx";
import SignIn from "@/features/Auth/pages/SignIn.jsx";

AuthGuard
    .propTypes = {
    children: PropTypes.node,
};

function AuthGuard({children}) {
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        return <SignIn/>
    }

    return (
        {
            children
        }
    );
}

export default AuthGuard;