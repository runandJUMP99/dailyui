import React from "react";

import classes from "./Challenger.module.css";

const Challenger = (props) => {
    return (
        <div className={classes.Challenger} style={{
            opacity: props.show ? 1 : 0,
            width: props.show ? "10rem" : 0
        }}>
            {props.img ? <img src={props.img} alt="Enemy"/> : <h1>?</h1>}
        </div>
    );
}

export default Challenger;