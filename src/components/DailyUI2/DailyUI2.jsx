import React from "react";

import Card from "./Card/Card";
import CardInfo from "./Form/CardInfo/CardInfo";
import Form from "./Form/Form";

import classes from "./DailyUI2.module.css";

const DailyUI2 = () => {
    return (
        <div className={classes.DailyUI2}>
            <div className={classes.Header}>
                <h1>buyOurStuff!</h1>
            </div>
            <div className={classes.TopHalf}>
                <Card />
                <div className={classes.CardInfo}>
                    <CardInfo />
                </div>
            </div>
            <Form />
        </div>
    );
}

export default DailyUI2;