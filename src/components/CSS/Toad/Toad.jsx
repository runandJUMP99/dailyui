import React from "react";

import classes from "./Toad.module.css";

const Toad = () => {
    return (
        <div className={classes.Toad}>
            <div className={classes.Mush}>
                <div className={classes.FirstCircle}></div>
                <div className={classes.SecondCircle}></div>
                <div className={classes.ThirdCircle}></div>
            </div>
            <div className={classes.TopFace}></div>
            <div className={classes.BottomFace}></div>
            <div className={classes.Eyes}>
                <div className={classes.Eye}>
                    <div className={classes.EyeShine}></div>
                </div>
                <div className={classes.Eye}>
                    <div className={classes.EyeShine}></div>
                </div>
            </div>
            <div className={classes.Mouth}>
                <div className={classes.Tongue}></div>
            </div>
        </div>
    );
}

export default Toad;