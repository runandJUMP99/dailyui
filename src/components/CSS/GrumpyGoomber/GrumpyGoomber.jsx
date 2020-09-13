import React, {useState} from "react";

import Background from "./Background/Background";
import Floor from "./Floor/Floor";
import Goomber from "./Goomber/Goomber";
import QuestionBlock from "./QuestionBlock/QuestionBlock";

import classes from "./GrumpyGoomber.module.css";

const GrumpyGoomber = () => {
    const [start, setStart] = useState(false);

    function handleClick() {
        setStart(true);
    }

    return (
        <div className={classes.GrumpyGoomber}>
            <h1 style={{display: start && "none"}}>Grumpy Goomber</h1>
            <button onClick={handleClick} style={{display: start && "none"}}>Start!</button>
            <Background start={start}/>
            <div className={classes.FirstBlock}  style={{animation: start && "auto-scroll 8s linear infinite"}}>
                <QuestionBlock />
            </div>
            <Goomber start={start} />
            <Floor start={start} />
            <div className={classes.HiddenFloor} style={{animation: start && "hidden-scroll 8s linear infinite"}}>
                <Floor />
            </div>
        </div>
    );
}

export default GrumpyGoomber;