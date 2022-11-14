import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes/AppRoutes";




const Header = () => {
    return (
        <div style={{display: "flex", gap: "5px"}}>
            <NavLink to={PATH.LOGIN}>Login</NavLink>
            <NavLink to={PATH.REGISTER}>Register</NavLink>
            <NavLink to={PATH.PROFILE}>Profile</NavLink>
            <NavLink to={PATH.NEW_PASSWORD}>New password</NavLink>
            <NavLink to={PATH.RECOVER_PASSWORD}>Recover password</NavLink>
            <NavLink to={PATH.TEST}>Test</NavLink>
        </div>
    );
};

export default Header;