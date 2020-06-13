import React from "react";

import Card from "./Card/Card";
import Form from "./Form/Form";

import classes from "./DailyUI2.module.css";

const DailyUI2 = () => {
    return (
        <div className={classes.DailyUI2}>
            <Card />
            <Form />
        </div>
    );
}

export default DailyUI2;