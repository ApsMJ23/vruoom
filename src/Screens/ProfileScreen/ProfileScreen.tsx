import {useEffect, useState} from "react";
import {getProfile} from "../../Common/Apis/ApiHelpers";


const ProfileScreen = () => {
    const [userDetails,setUserDetails] = useState()
    const getUserDetails = async () => {
        const res = await getProfile()
        console.log(res)
    }
    useEffect(()=>{
        getUserDetails()
    },[])
    return (
        <div style={{marginTop:'10rem'}}>
            ProfileScreen
        </div>
    )
}

export default ProfileScreen