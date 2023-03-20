import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {drawerWidth, navItems} from "@/config/constants";
import CloseIcon from '@mui/icons-material/Close';
import AdjustIcon from '@mui/icons-material/Adjust';

interface Props {
    window?: () => Window;
}

const Navbar = ({window}: Props) => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '20px'}}>
                <Box sx={{my: 2, display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <AdjustIcon/>
                    <Typography variant={'h6'}>
                        Sammi
                    </Typography>
                </Box>
                <CloseIcon/>
            </Box>
            <Divider/>
            <List>
                {navItems.map(item => (
                    <ListItem key={item.route} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={item.label}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box height={'10vh'} sx={{display: 'flex'}}>
            <AppBar component={'nav'}>
                <Toolbar>
                    <IconButton
                        color={'inherit'}
                        aria-label={'open drawer'}
                        edge={'start'}
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{my: 2, alignItems: 'center', gap: '5px', flexGrow: 1, display: {xs: 'none', sm: 'flex'}}}>
                        <AdjustIcon/>
                        <Typography
                            variant="h6"
                            component="div"
                        >
                            Sammi
                        </Typography>
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map(item => (
                            <Button key={item.route} sx={{color: '#fff'}}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
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
            </Box>
        </Box>
    );
};

export default Navbar;