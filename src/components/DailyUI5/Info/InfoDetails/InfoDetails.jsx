import React from "react";

import classes from "./InfoDetails.module.css";

const InfoDetails = (props) => {
    return (
        <div className={classes.InfoDetails}>
            <div className={classes.InfoNames}>
                <h3>Name: </h3>
                <h3>Weight: </h3>
                <h3>Class: </h3>
                <h3>Weapon: </h3>
            </div>
            <div className={classes.InfoDescription}>
                <h3>{props.character.characterInfo.name}</h3>
                <h3>{props.character.characterInfo.weight}</h3>
                <h3>{props.character.characterInfo.class}</h3>
                <h3>{props.character.characterInfo.weapon}</h3>
            </div>
        </div>
    );
}

export default InfoDetails;