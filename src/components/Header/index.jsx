import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/icon-logo.svg";

export default function Header () {
    return (
        <header className="header">
            <NavLink to="/">
                <img className="header__logo" src={logo} alt="logo de SportSee" />
            </NavLink>
            <nav className="header__navbar">
                <ul className="header__navbarList">
                    <li className="header__navbarListItem">
                        <NavLink className="header__navbarListAnchor" to="#">Accueil</NavLink>
                    </li>
                    <li className="header__navbarListItem">
                        <NavLink className="header__navbarListAnchor" to="#">Profil</NavLink>
                    </li>
                    <li className="header__navbarListItem">
                        <NavLink className="header__navbarListAnchor" to="#">Réglages</NavLink>
                    </li>
                    <li className="header__navbarListItem">
                        <NavLink className="header__navbarListAnchor" to="#">Communauté</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}