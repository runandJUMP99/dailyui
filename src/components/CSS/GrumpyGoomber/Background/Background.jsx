import React from "react";

import classes from "./Background.module.css";

const Background = (props) => {
    return (
        <div className={classes.Background}>
            <div className={classes.Sky}></div>
            <div className={classes.Clouds} style={{animation: props.start && "auto-scroll 8s linear infinite"}}>
                <div className={classes.CloudTop}>
                    <div className={classes.CloudBumpLarge}></div>
                    <div className={classes.CloudBumpSmall}></div>
                </div>
                <div className={classes.CloudBottom}>
                    <div className={classes.CloudBumpLarge}></div>
                    <div className={classes.CloudBumpSmall}></div>
                </div>
            </div>
            <div className={classes.Bushes} style={{animation: props.start && "auto-scroll 8s linear infinite"}}>
                <div className={classes.BushOne}>
                    <div className={classes.BushBumpLarge}></div>
                    <div className={classes.BushBumpSmall}></div>
                </div>
                <div className={classes.BushTwo}>
                    <div className={classes.BushBumpLarge}></div>
                    <div className={classes.BushBumpSmall}></div>
                </div>
            </div>
        </div>
    );
}

export default Background;