// IMPORTING APIS
import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    Button,
    Menu,
    MenuItem,
    ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HelpIcon from '@material-ui/icons/Help';

// REACT APP IMPORTS
import Home from "../../pages/Home";
import ContactUs from "../../pages/ ContactUs";
import AboutUs from "../../pages/AboutUs";
import Enquiry from "../../pages/Enquiry";
import Events from "../../pages/Events";
import Gallery from "../../pages/Gallery";
import Services from "../../pages/Services";
import Training from "../../pages/Training";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    iconButton: {
        paddingRight: theme.spacing(1)
    },
    title: {
        flex: 1
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <AppBar>
                    <Toolbar>
                        <Typography
                            variant="h5"
                            component="p"
                            color="textSecondary"
                            className={classes.title}
                        >
                            <img src="https://mipsoftware.co.in/uploads/book_image/final.png"
                                width="10%"
                                alt="" />
                        </Typography>
                        {isMobile ? (
                            <>
                                <IconButton
                                    color="textPrimary"
                                    className={classes.menuButton}
                                    edge="start"
                                    aria-label="menu"
                                    onClick={handleMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchor}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right"
                                    }}
                                    KeepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right"
                                    }}
                                    open={open}
                                >
                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/"
                                    >
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <Typography variant="h6"> Home</Typography>
                                    </MenuItem>

                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/About-us"
                                    >
                                        <ListItemIcon>
                                            <PeopleAltIcon />
                                        </ListItemIcon>

                                        <Typography variant="h6"> About Us </Typography>
                                    </MenuItem>

                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/Events"
                                    >
                                        <ListItemIcon>
                                            <EmojiEventsIcon />
                                        </ListItemIcon>
                                        <Typography variant="h6"> Events </Typography>
                                    </MenuItem>

                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/Gallery"
                                    >
                                        <ListItemIcon>
                                            <PermMediaIcon />
                                        </ListItemIcon>
                                        <Typography variant="h6"> Gallery </Typography>
                                    </MenuItem>

                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/Training"
                                    >
                                        <ListItemIcon>
                                            <SportsHandballIcon />
                                        </ListItemIcon>
                                        <Typography variant="h6"> Training </Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/College"
                                    >
                                        <ListItemIcon>
                                            <EmojiSymbolsIcon />
                                        </ListItemIcon>
                                        <Typography variant="h6"> Services </Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/Contact-us"
                                    >
                                        <ListItemIcon>
                                            <ContactMailIcon />

                                        </ListItemIcon>
                                        <Typography variant="h6"> Contact Us </Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/Contact-us"
                                    >
                                        <ListItemIcon>
                                            <HelpIcon />
                                        </ListItemIcon>
                                        <Typography variant="h6"> Enquiry </Typography>
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <div style={{ marginRight: "2rem" }}>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/"
                                    color="default"
                                >
                                    <HomeIcon className={classes.iconButton} />
                                    Home
                                </Button>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/About-us"
                                    color="default"
                                >
                                    <PeopleAltIcon className={classes.iconButton} />
                                    About Us
                                </Button>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/Events"
                                    color="default"
                                >
                                    <EmojiEventsIcon className={classes.iconButton} />
                                    Events
                                </Button>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/Gallery"
                                    color="default"
                                >
                                    <PermMediaIcon className={classes.iconButton} />
                                    Gallery
                                </Button>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/Training"
                                    color="default"
                                >
                                    <SportsHandballIcon className={classes.iconButton} />
                                    Training
                                </Button>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/Services"
                                    color="default"
                                >
                                    <EmojiSymbolsIcon className={classes.iconButton} />
                                    Services
                                </Button>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/Contact-us"
                                    color="default"
                                >
                                    <ContactMailIcon className={classes.iconButton} />
                                    Contact Us
                                </Button>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/Enquiry"
                                    color="default"
                                >
                                    <HelpIcon className={classes.iconButton} />
                                    Enquiry
                                </Button>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About-us" component={AboutUs} />
                    <Route exact path="/Events" component={Events} />
                    <Route exact path="/Gallery" component={Gallery} />
                    <Route exact path="/Enquiry" component={Enquiry} />
                    <Route exact path="/Contact-us" component={ContactUs} />
                    <Route exact path="/Services" component={Services} />
                    <Route exact path="/Training" component={Training} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Header;
