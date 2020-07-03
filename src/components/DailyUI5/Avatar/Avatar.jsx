import React from "react";

import classes from "./Avatar.module.css";

const Avatar = (props) => {
    return (
        <div className={classes.Avatar}>
            <img src={props.img} alt="Character Image"/>
        </div>
    );
}

export default Avatar;