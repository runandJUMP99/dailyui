import React from "react";

import classes from "./StatName.module.css";

const StatName = (props) => {
    return (
        <div className={classes.StatName}>{props.name}</div>
    );
}

export default StatName;