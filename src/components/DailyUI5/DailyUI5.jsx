import React, {useState} from "react";

import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";
import Stats from "./Stats/Stats";

import classes from "./DailyUI5.module.css";

const DailyUI5 = () => {
    const characters = [{
        characterStats: {
            strength: "80%",
            agility: "50%",
            intellect: "30%"
        },
        characterInfo: {
            name: "Sluggernaut",
            weight: "92 lbs",
            class: "Warrior",
            weapon: "Two-Handed Axe",
            quote: "I slam. They fall"
        }
    }, {
        characterStats: {
            strength: "50%",
            agility: "85%",
            intellect: "35%"
        },
        characterInfo: {
            name: "Rumple",
            weight: "222 lbs",
            class: "Assassin",
            weapon: "Roll",
            quote: "Roll out!"
        }
    }, {
        characterStats: {
            strength: "20%",
            agility: "40%",
            intellect: "90%"
        },
        characterInfo: {
            name: "Octaleron",
            weight: "126 lbs",
            class: "Mage",
            weapon: "Necronomicon",
            quote: "Spells on spells on spells"
        }
    }];

    const [index, setIndex] = useState(1);
    const [style, setStyle] = useState({
        display: {transform: "translateX(0)"},
        left: {transform: "translateX(-100%)"},
        right: {position: "fixed", transform: "translateX(100%)"}
    });

    function handleClick(selection) {
        

        if (selection === "prev") {
            if (index === 0) {
                setStyle({
                    display: {transform: "translateX(0)", transition: "all 1s ease-out"},
                    left: {transform: "translateX(-100%)", transition: "all 1s ease-out"},
                    right: {position: "fixed", transform: "translateX(100%)", transition: "none"}
                });
            } else if (index === 1) {
                setStyle({
                    display: {transform: "translateX(-100%)", transition: "all 1s ease-out"},
                    left: {position: "fixed", transform: "translateX(100%)", transition: "none"},
                    right: {transform: "translateX(0)", transition: "all 1s ease-out"}
                });
            } else {
                setStyle({
                    display: {position: "fixed", transform: "translateX(100%)", transition: "none"},
                    left: {transform: "translateX(0)", transition: "all 1s ease-out"},
                    right: {transform: "translateX(-100%)", transition: "all 1s ease-out"}
                });
            }

            if (index <= 0) {
                setIndex(characters.length - 1);
            } else {
                setIndex(prevValue => (
                    prevValue - 1
                ));
            }

        } else if (selection === "next") {
            if (index >= characters.length - 1) {
                setIndex(0);
            } else {
                setIndex(prevValue => (
                    prevValue + 1
                ));
            }
            
            setStyle({
                display: {position: "fixed", transform: "translateX(100%)", transition: "all 1s ease-out"},
                left: {transform: "translateX(0)", transition: "all 1s ease-out"},
                right: {transform: "translateX(-100%)"}
            });
        }
        
    }

    return (
        <div className={classes.DailyUI5}>
            <div className={classes.Profile} style={style.left}>
                <div className={classes.TopHalf}>
                    <Avatar />
                    <Stats character={characters[0]}/>
                </div>
                <div className={classes.BottomHalf}>
                    <Info character={characters[0]}/>
                    <div className={classes.Buttons}>
                        <button onClick={() => handleClick("prev")}>Prev</button>
                        <button onClick={() => handleClick("next")}>Next</button>
                    </div>
                </div>
            </div>
            <div className={classes.Profile} style={style.display}>
                <div className={classes.TopHalf}>
                    <Avatar />
                    <Stats character={characters[1]}/>
                </div>
                <div className={classes.BottomHalf}>
                    <Info character={characters[1]}/>
                    <div className={classes.Buttons}>
                        <button onClick={() => handleClick("prev")}>Prev</button>
                        <button onClick={() => handleClick("next")}>Next</button>
                    </div>
                </div>
            </div>
            <div className={classes.Profile} style={style.right}>
                <div className={classes.TopHalf}>
                    <Avatar />
                    <Stats character={characters[2]}/>
                </div>
                <div className={classes.BottomHalf}>
                    <Info character={characters[2]}/>
                    <div className={classes.Buttons}>
                        <button onClick={() => handleClick("prev")}>Prev</button>
                        <button onClick={() => handleClick("next")}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DailyUI5;