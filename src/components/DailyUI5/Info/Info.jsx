import React from "react";

import InfoDetails from "./InfoDetails/InfoDetails";

import classes from "./Info.module.css";

const Info = (props) => {
    return (
        <div className={classes.Info}>
            <InfoDetails character={props.character}/>
            <h2 className={classes.Quote}>"<i> {props.character.characterInfo.quote} </i>"</h2>
        </div>
    );
}

export default Info;