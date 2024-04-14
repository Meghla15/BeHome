import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Link, useLocation } from 'react-router-dom';
import Login from '../../Pages/Login';

const PrivetRoute = ({children}) => {
    const{user,loading} =UseAuth()
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg "></span>
    }

    if (!user) {
        return <Link to={"/login"}><Login></Login></Link>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRoute;