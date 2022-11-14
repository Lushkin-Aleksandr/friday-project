import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../../features/Login/Login";
import Register from "../../features/Register/Register";
import Profile from "../../features/Profile/Profile";
import NotFound404 from "../../features/NotFound404/NotFound404";
import NewPassword from "../../features/NewPassword/NewPassword";
import RecoverPassword from "../../features/RecoverPassword/RecoverPassword";
import Test from "../../features/Test/Test";


export const PATH = {
    LOGIN: 'login',
    REGISTER: 'register',
    PROFILE: 'profile',
    NEW_PASSWORD: 'new-password',
    RECOVER_PASSWORD: 'recover-password',
    TEST: 'test',
}


const AppRoutes = () => {


    return (


        <Routes>
            // Default
            <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>

            // Other
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.REGISTER} element={<Register/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
            <Route path={PATH.RECOVER_PASSWORD} element={<RecoverPassword/>}/>
            <Route path={PATH.TEST} element={<Test/>}/>
            <Route path={'/*'} element={<NotFound404/>}/>
        </Routes>

    );
};

export default AppRoutes;