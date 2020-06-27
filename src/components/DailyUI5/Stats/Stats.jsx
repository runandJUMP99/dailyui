import React from "react";

import StatBar from "./StatBar/StatBar";
import StatName from "./StatName/StatName";

import classes from "./Stats.module.css";

const Stats = (props) => {
    return (
        <div className={classes.Stats}>
            <div>
                <StatName name="Strength" />
                <StatBar power={props.character.characterStats.strength} />
            </div>
            <div>
                <StatName name="Agility" />
                <StatBar power={props.character.characterStats.agility} />
            </div>
            <div>
                <StatName name="Intellect" />
                <StatBar power={props.character.characterStats.intellect} />
            </div>
        </div>
    );
}

export default Stats;