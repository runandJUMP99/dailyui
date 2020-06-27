import React from "react";

import classes from "./StatBar.module.css";

const StatBar = (props) => {
    return (
        <div className={classes.StatBar} style={{width: props.power}}></div>
    )
}

export default StatBar;