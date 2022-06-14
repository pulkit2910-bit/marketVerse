import React from "react";

import "./css/Navbar.css"

import { Link } from "react-router-dom";

import { Avatar, List, ListItem, Typography } from "@material-ui/core";

// website logo
import icon from '../images/cryptocurrency.png'

// mui icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} />
                <Typography variant="h4" component="h3">
                    <Link to="/" className="logoName">MarketVerse</Link>
                </Typography>
            </div>
            <div>
                <List>
                    <Link to='/' className="navLinks">
                        <ListItem button className="navItems">
                            <HomeRoundedIcon className="navIcons" />
                            Home
                        </ListItem>
                    </Link>
                    <Link to='/cryptocurrencies' className="navLinks">
                        <ListItem button className="navItems">
                            <CurrencyBitcoinRoundedIcon className="navIcons" />
                            Cryotocurrencies
                        </ListItem>
                    </Link>
                    <Link to='/exchanges' className="navLinks">
                        <ListItem button className="navItems">
                            <TimelineRoundedIcon className="navIcons" />
                            Exchanges
                        </ListItem>
                    </Link>
                    <Link to='/news' className="navLinks">
                        <ListItem button className="navItems">
                            <NewspaperRoundedIcon className="navIcons" />
                            News
                        </ListItem>
                    </Link>
                </List>
            </div>
        </div>
    )
}

export default Navbar