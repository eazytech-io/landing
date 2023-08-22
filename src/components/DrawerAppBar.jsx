import * as React from 'react';
import PropTypes from 'prop-types';
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
import { Link } from 'react-scroll';
import Button from '@mui/material/Button';
import Logo from '../assets/images/eztech.png'

const drawerWidth = 240;
const navItems = ['About', 'Services', 'Projects'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img className='w-[15%] self-center align-middle justify-center m-auto pt-5 pb-5' src={Logo} alt="" />
            <Divider />
            <List className='w-[90%]'>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', width: "30%" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', paddingBottom: "90px", background: "#fff" }} className="bg-white w-[85%] m-auto mb-10"  >
            <AppBar className="bg-white shadow-none w-[85%] m-auto" component="nav">
                <Toolbar style={{ backgroundColor: "#fff !important", boxShadow: "none !important" }} className='bg-white shadow-none w-[90%] m-auto text-black flex justify-between align-middle '>
                    <Box className="flex gap-10 ">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img className='w-[6%] self-center align-middle justify-center hidden md:block' src={Logo} alt="" />
                        <Box className="self-center" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    to={item.toLowerCase()} // Use lowercase item name as the ID for the target element
                                    smooth={true} // Enable smooth scrolling
                                    duration={500} // Scroll duration in milliseconds
                                    offset={-70} // Offset from the top to adjust scrolling position
                                >
                                    <Button sx={{ color: '#000', mx: "20px" }}>
                                        {item}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Box>
                    <Link
                        to="contact" 
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        <Button sx={{backgroundColor: "#81B6FF", color: "white", textDecoration: "none"}}> Contact Us</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>


        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;