import { AppBar, Toolbar, List, IconButton, Drawer, ListItem, Divider } from "@material-ui/core";
import React, { useState } from "react";
import estilos from '../App.styles';
import imagen from '../images/etiqueta.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const links = [
    {
        id: "about",
        texto: "About me"
    },
    {
        id: "skills",
        texto: "My Skills"
    },
    {
        id: "work",
        texto: "My work done"
    },
    {
        id: "contact",
        texto: "Get in touch"
    }
];

const scrollToTop=()=>{
    scroll.scrollToTop();
}

const Navbar = () => {
    const classStyle = estilos();
    const [open, setOpen] = useState();
    return (
        <>
            <AppBar position="sticky">
                <Toolbar className={classStyle.navbar}>
                    <img src={imagen} className={classStyle.imgNab} alt="imagen" onClick={scrollToTop}/>
                    <List className={classStyle.menu}>
                        {
                            links.map(({ id, texto }, index) => (
                                <Link
                                    activeClass="active"
                                    key={index}
                                    to={id}
                                    spy={true}
                                    smooth={true}
                                    offset={-65}
                                    duration={600}>{texto}</Link>
                            ))
                        }
                    </List>
                    <IconButton className={classStyle.burgerMenu} onClick={() => setOpen(true)}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <IconButton onClick={() => setOpen(false)}>
                    <CancelIcon fontSize="large" />
                </IconButton>
                <Divider />
                <List className={classStyle.menuLateral}>
                    {
                        links.map(({ id, texto }, index) => (
                            <Link
                                activeClass="active"
                                key={index}
                                to={id}
                                spy={true}
                                smooth={true}
                                offset={-65}
                                duration={600}>
                                <ListItem onClick={() => setOpen(false)} component="h5">{texto}</ListItem></Link>
                        ))
                    }
                </List>
            </Drawer>
        </>
    )
}

export default Navbar;