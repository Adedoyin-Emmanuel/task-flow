
import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Logout = () => {

    const navigateTo = useNavigate();

    return (
        <div>
            <h1>Logout works!</h1>
        </div>
    );  
}

export default Logout;
    