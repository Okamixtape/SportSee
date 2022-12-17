import React, { Component } from "react";
import logo from "../../assets/icons/icon-logo.svg";

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <img className="footer__logo" src={logo} alt="logo de SportSee" />
                <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
            </footer>
        );
    }
}

export default Footer;