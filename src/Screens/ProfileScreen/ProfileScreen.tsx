import {useEffect, useState} from "react";
import {getNoStaffUsers, getProfile} from "../../Common/Apis/ApiHelpers";
import {Container, Input} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {toast} from "react-toastify";

type User = {
    id: string,
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    is_staff:boolean,
    isAdmin:boolean,
}

const ProfileScreen = () => {
    const [userDetails,setUserDetails] = useState<User>()
    const [inactiveUsers,setInactiveUsers] = useState<User[]>()
    const getUserDetails = async () => {
        const res = await getProfile()
        if(res){
            console.log(res)
            setUserDetails(res)
        }
    }
    const fetchInactiveUsers = async () => {
        // Fetch Inactive Users
        const res = await getNoStaffUsers()
        if(res){
            setInactiveUsers(res)
        }else{
            toast.error('Error fetching inactive users')
        }
    }
    useEffect(()=>{
        getUserDetails()
    },[])
    return (
        <Container sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}  maxWidth={'xl'} style={{marginTop:'5rem'}}>
            <Box padding={5} sx={{background:'#333',color:'beige'}} width={{xs:'100%',md:'50%'}} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <h1>Profile</h1>
                <h3>Username: {userDetails?.username}</h3>
                <h3>Email: {userDetails?.email}</h3>
                <h3>First Name: {userDetails?.first_name}</h3>
                <h3>Last Name: {userDetails?.last_name}</h3>
            </Box>
            {<Box padding={5} marginTop={10} sx={{background: '#333', color: 'beige'}} width={{xs: '100%', md: '50%'}}
                  display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <h1>Admin Rights</h1>
                <Button onClick={() => fetchInactiveUsers()} variant={'contained'} color={'primary'}>Fetch Inactive
                    Users</Button>
                {inactiveUsers &&
                    inactiveUsers?.map((user, index) => (
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}} key={index}>
                            <Input type={'checkbox'}/>
                            <span>{user.username}</span>
                        </div>
                    ))
                }
            </Box>}
        </Container>
    )
}

export default ProfileScreen