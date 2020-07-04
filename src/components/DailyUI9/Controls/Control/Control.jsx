import React from "react";

import classes from "./Control.module.css";

const Control = (props) => {
    let style = null;

    if (props.icondisplayName === "PlayArrowIcon") {
        style = {
            height: "5rem",
            width: "5rem"
        };
    }

    return (
        <div className={classes.Control} style={style}>
            {props.icon}
        </div>
    );
}

export default Control;