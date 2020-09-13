import React from "react";

import classes from "./Goomber.module.css";

const Goomber = (props) => {
    return (
        <div className={classes.Goomber}>
            <div className={classes.Head}>
                <div className={classes.Eyebrow}></div>
                <div className={classes.Eyes}>
                    <div className={classes.Eye}></div>
                    <div className={classes.Eye}></div>
                </div>
                <div className={classes.Mouth}></div>
            </div>
            <div className={classes.Feet}>
                <div className={classes.LeftFoot} style={{animation: props.start && "left-walk 1s linear infinite"}}></div>
                <div className={classes.RightFoot} style={{animation: props.start && "right-walk 1s linear infinite"}}></div>
            </div>
        </div>
    );
}

export default Goomber;