import React from "react";

import classes from "./Card.module.css";

const Card = () => {
    return (
        <div className={classes.Card}>
            <h2>MoosterCard</h2>
            <div className={classes.CardNumbers}>
                <h4>0123 4567 89XX XXXX</h4>
                <p>04/20</p>
            </div>
            <h3>Mario Mario</h3>
        </div>
    );
}

export default Card;