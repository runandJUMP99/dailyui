import React from "react";

import Album from "./Album/Album";
import Controls from "./Controls/Controls";
import Options from "./Options/Options";

import classes from "./DailyUI9.module.css";

const DailyUI9 = () => {
    return (
        <div className={classes.DailyUI9}>
            <Album />
            <Options />
            <Controls />
        </div>
    );
}

export default DailyUI9;