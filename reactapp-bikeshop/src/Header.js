import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar} from "@material-ui/core";
import {Toolbar} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Button} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary
    },
}));

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="Header">
        <AppBar position={"static"}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Joe's Bike Shop
                </Typography>
                <Menu
                    id={"customised-menu"}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Link to="/" className={classes.link}>
                        <ListItem button onClick={handleClose}>
                        <ListItemIcon>
                            <HomeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                        </ListItem>
                    </Link>

                    <Link to="/schedule" className={classes.link}>
                        <ListItem button onClick={handleClose}>
                        <ListItemIcon>
                            <EventIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="View Repair Schedule" />
                        </ListItem>
                    </Link>

                    <Link to="/inventory" className={classes.link}>
                        <ListItem button onClick={handleClose}>
                        <ListItemIcon>
                            <AssignmentIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Current Inventory" />
                        </ListItem>
                    </Link>

                    <Link to="/customers" className={classes.link}>
                        <ListItem button onClick={handleClose}>
                        <ListItemIcon>
                            <PeopleIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Our Customers" />
                        </ListItem>
                    </Link>

                </Menu>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
};
