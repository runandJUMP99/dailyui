import React from "react";

import CardInfo from "./CardInfo/CardInfo";
import CustomerInfo from "./CustomerInfo/CustomerInfo";

import classes from "./Form.module.css";

const Form = () => {
    return (
        <div className={classes.Form}>
            <CustomerInfo />
            <div className={classes.CardInfo}>
                <CardInfo />
            </div>
            <button>Submit!</button>
        </div>
    );
}

export default Form;