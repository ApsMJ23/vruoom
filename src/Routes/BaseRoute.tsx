import {Outlet, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

const BaseRoute = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(()=>{
        if(token === null) {
            navigate('/login')
        }
        else{
            navigate('/admin/profile')
        }
    },[])
    return <Outlet/>
}

export default BaseRoute;