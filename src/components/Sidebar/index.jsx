import React from "react";
import { NavLink } from "react-router-dom";
import méditation from "../../assets/icons/sidebar-nav-meditation.svg";
import natation from "../../assets/icons/sidebar-nav-swimming.svg";
import cyclisme from "../../assets/icons/sidebar-nav-bicycle.svg";
import musculation from "../../assets/icons/sidebar-nav-dumbbell.svg";
import Icon from "../../utils/icon";

export default function Sidebar () {
    const iconArray = [méditation, natation, cyclisme, musculation];
    return (
        <footer className="sidebar">
            <nav className="sidebar__navbar">
                <ul className="sidebar__navbarList">
                    {iconArray.map((icon) => {
                        return (
                        <li className="sidebar__navbarListItem">
                            <NavLink className="sidebar__navbarListAnchor" to="#" key={`navlink-${icon}`}>
                                <Icon className="sidebar__navbarListIcon" src={icon} key={`icon-${icon}`} />
                            </NavLink>
                        </li>
                        )
                    })}
                </ul>
            </nav>
            <p className="sidebar__copyright">Copyright, SportSee 2020</p>
        </footer>
    );
}