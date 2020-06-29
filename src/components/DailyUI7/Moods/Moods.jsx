import React from "react";

import {IoMdMoon} from "react-icons/io";
import {GiRingedPlanet} from "react-icons/gi";
import {AiFillStar} from "react-icons/ai";

import classes from "./Moods.module.css";

const Moods = (props) => {
    return (
        <div className={classes.Moods}>
            <button onClick={() => props.onClick("star")}>Mood <AiFillStar /></button>
            <button onClick={() => props.onClick("moon")}>Mood <IoMdMoon /></button>
            <button onClick={() => props.onClick("planet")}>Mood <GiRingedPlanet /></button>
        </div>
    );
}

export default Moods;