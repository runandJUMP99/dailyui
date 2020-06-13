import React from "react";

import classes from "./Toolbar.module.css";

const Toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <a className={classes.Logo} href="/">
                Logo
            </a>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
}

export default Toolbar;