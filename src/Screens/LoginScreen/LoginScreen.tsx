import Typography from "@mui/material/Typography";
import {Container, FormControl, Input, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {loginUser} from "../../Common/Apis/ApiHelpers";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const LoginScreen = () => {
    const navigate  = useNavigate()
    const [user,setUser] = useState({
        userName: '',
        password: ''
    })
    const login = async ()=>{
        const payload={
            username: user.userName,
            password: user.password
        }
        const res = await loginUser(payload)
        if(res) {
            if (res.hasOwnProperty('token')) {
                localStorage.setItem('token', res.token)
                navigate('/admin/profile')
                toast.success('Login Successful')
            } else {
                if (res.hasOwnProperty('error')) toast.error(res.error)
                else toast.error('Invalid Credentials')
            }
        }else{
            toast.error('Failed To Login, Please Try Again Later')
        }

    }
    return (
        <Container maxWidth={'xl'} sx={{background: '#333333', paddingTop: 10, height: '100vh'}}>
            <Box padding={5} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
                <Paper sx={{width: '40%',padding:5}} variant={'elevation'} elevation={10}>
                    <Typography variant={'h4'} align={'center'} color={'primary'}>Login</Typography>
                    <FormControl fullWidth={true} variant={'outlined'} style={{padding: '0 2rem'}}>
                        <Input onChange={(e)=>setUser({...user,userName: e.target.value})} id={'userName'} placeholder={'Username'} fullWidth={true}
                               style={{marginTop: '1rem'}}/>
                    </FormControl>
                    <FormControl fullWidth={true} variant={'outlined'} style={{padding: '1rem 2rem'}}>
                        <Input  onChange={(e)=>setUser({...user,password:e.target.value})} id={'PassWord'} placeholder={'Password'} type={'password'} fullWidth={true}/>
                    </FormControl>
                    <Button onClick={login} variant={'contained'} color={'primary'} fullWidth={true}
                            style={{marginTop: '1rem', background: '#333'}}>Login</Button>
                </Paper>
            </Box>
        </Container>
    );
}

export default LoginScreen;