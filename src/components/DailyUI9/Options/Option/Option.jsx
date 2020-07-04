import React from "react";

import classes from "./Option.module.css";

const Option = (props) => {
    return (
        <div className={classes.Option}>
            {props.icon}
        </div>
    )
}

export default Option;