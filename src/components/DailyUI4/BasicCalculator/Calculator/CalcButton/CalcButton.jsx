import React from "react";

import classes from "./CalcButton.module.css";

const CalcButton = (props) => {
    return (
        <div onClick={() => props.onClick(props.button)} className={classes.CalcButton}>
            {props.button}
        </div>
    );
}

export default CalcButton;