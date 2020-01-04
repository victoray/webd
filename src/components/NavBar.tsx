import React from "react";
import {Menu} from "semantic-ui-react";
import logo from '../logo.svg';

const NavBar = () => {
    return (
        <Menu stackable={false} borderless inverted className={"navbar"}>
            <Menu.Item>
                <img src={logo} alt={""} className={"navbar__logo"}/>
            </Menu.Item>
            <Menu.Item>
                WebDEV
            </Menu.Item>
        </Menu>
    )
};

export default NavBar;