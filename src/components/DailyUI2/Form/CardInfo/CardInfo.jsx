import React from "react";

import classes from "./CardInfo.module.css";

const CardInfo = () => {
    return (
        <div className={classes.CardInfo}>
            <label>Card Information: </label>
            <input type="text" placeholder="Card Number"/>
            <div className={classes.SmallCardInfo}>
                <div className={classes.ExpDate}>
                    <label>Exp. Date: </label>
                    <input type="text" placeholder="XX"/>
                    / <input type="text" placeholder="XX"/>
                </div>
                <div className={classes.Cvv}>
                    <label>CVV: </label>
                    <input type="text" placeholder="CVV"/>
                </div>
            </div>
        </div>
    );
}

export default CardInfo;