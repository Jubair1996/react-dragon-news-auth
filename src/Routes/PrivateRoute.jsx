
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    // console.log(location);
    if(loading){
        return <p>Loading</p>
    }
    if(user) {
        return children;
    }
    return <Navigate state= {location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.node
  };
export default PrivateRoute;