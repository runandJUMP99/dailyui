import React, {useState} from "react";

import Favorite from "./Favorite/Favorite";

import classes from "./Plant.module.css";

const Plant = (props) => {
    const [content, setContent] = useState(
        <React.Fragment>
            <h5>{props.name}</h5>
            <img src={props.img} alt="Plant"/>
            <p>{props.rating}</p>
        </React.Fragment>
    );
    const [flip, setFlip] = useState(false);
    const [show, setShow] =useState(true);

    function handleClick() {
        setFlip(prevValue => (
            !prevValue
        ));

        if (!flip) {
            setTimeout(() => {
                setContent(
                    <div style={{
                        background: "#10375c",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "space-around",
                        transform: "rotateX(180deg)"
                    }}>
                        <h5>{props.techName}</h5>
                        <p style={{fontSize: "0.8rem", textAlign: "center"}}>{props.description}</p>
                        <p style={{fontSize: "0.6rem"}}>Similar plants:{props.similarPlants}</p>
                    </div>
                );
                setShow(prevValue => (
                    !prevValue
                ));
            }, 250);
        } else {
            setTimeout(() => {
                setContent(
                    <React.Fragment>
                        <h5>{props.name}</h5>
                        <img src={props.img} alt="Plant"/>
                        <p>{props.rating}</p>
                    </React.Fragment>
                );
                setShow(prevValue => (
                    !prevValue
                ));
            }, 250);
        }
    }
    
    return (
        <div className={classes.Card} style={{
            transform: flip ? "rotateX(180deg)" : "rotateX(0)"
        }}>
            <div className={classes.Plant} onClick={handleClick}>
                {content}
            </div>
            <div className={classes.Favorite} style={{
                display: show ? "block" : "none",
                transform: flip ? "rotateX(180deg)" : "rotateX(0)"
            }}>
                <Favorite />
            </div>  
        </div>
    );
}

export default Plant;