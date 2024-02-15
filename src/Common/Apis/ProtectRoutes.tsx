import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {toast} from "react-toastify";


const ProtectRoutes = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    useEffect(()=>{
        if(token === null) {
            toast.error('Invalid Session Logging Out')
            setTimeout(()=>{
                localStorage.removeItem('token')
                navigate('/login')
            },1000)
        }
    },[])
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default ProtectRoutes;