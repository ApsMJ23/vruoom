import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const drawerWidth = 240;
const navItems = [{
    name: 'Home',
    path: '/home'
},
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    {
        name: 'Login',
        path: '/login'
    }
];
const navItemsAferLogin = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard'
    },
    {
        name: 'Profile',
        path: '/admin/profile'
    },
    {
        name: 'Logout',
        path: '/logout'
    }
]

export default function DrawerAppBar() {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [navigationItems, setNavigationItems] = React.useState(navItems);
    const isLogged = localStorage.getItem('token') !== null;
    useEffect(() => {
        if (isLogged) {
            setNavigationItems(navItemsAferLogin)
        }
    }, [isLogged])
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleClick = (item: any) => {
        if (item.name === 'Logout') {
            localStorage.removeItem('token')
            setNavigationItems(navItems)
            navigate('/login')
        } else {
            navigate(item.path)
        }
    }
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography color={'primary'} variant="h6" sx={{my: 2}}>
                VRUOOM
            </Typography>
            <Divider/>
            <List>
                {navigationItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText sx={{color: 'primary'}} onClick={() => handleClick(item)}
                                          primary={item.name}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar color={"secondary"} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        VRUOOM
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navigationItems.map((item) => (
                            <Button variant={"text"} key={item.name} onClick={() => handleClick(item)}
                                    sx={{color: 'primary'}}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}