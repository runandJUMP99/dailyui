import React from "react";

import Calculator from "./Calculator/Calculator";

import classes from "./BasicCalculator.module.css";

const BasicCalculator = () => {
    return (
        <div className={classes.BasicCalculator}>
            <Calculator />
        </div>
    );
}

export default BasicCalculator;