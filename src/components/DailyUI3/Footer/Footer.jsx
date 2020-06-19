import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <a href="/">Learn More</a>
            <a href="/">Contact Us</a>
            <p>© {new Date().getFullYear()} runandJUMP</p>
        </div>
    );
}

export default Footer;