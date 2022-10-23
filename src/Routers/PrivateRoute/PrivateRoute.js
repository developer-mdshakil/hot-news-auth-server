import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexs/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if(!user?.uid){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children
};

export default PrivateRoute;