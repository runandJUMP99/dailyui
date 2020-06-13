import React from "react";

import Bottom from "./Bottom/Bottom";
import Coin from "./Coin/Coin";
import Toolbar from "./Toolbar/Toolbar";

import classes from "./DailyUI1.module.css";

const DailyUI1 = () => {
    return (
        <div className={classes.DailyUI1}>
            <Toolbar />
            <Coin />
            <Bottom />
        </div>
    );
}

export default DailyUI1;