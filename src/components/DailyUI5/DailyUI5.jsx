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
            quote: "I slam. They fall",
            description: "Sluggernaut INSISTS on using his two-handed axe, Olga. But with it being two times his weight and three times his size, it makes him a big sluggish. Oh... and it hurts!"
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
            quote: "Roll out!",
            description: "He may seem slow, but his frame is built for speed! Rumple is able to roll into a fight, do damage, and bounce away before the enemy even notices."
        }
    }, {
        characterStats: {
            strength: "20%",
            agility: "40%",
            intellect: "90%"
        },
        characterInfo: {
            name: "Moogi",
            weight: "126 lbs",
            class: "Mage",
            weapon: "Necronomicon",
            quote: "Spells on spells on spells",
            description: "Stay back, cast spells, and unleash chaos! Moogi and her crystals are great at dealing high damage, but her low hp makes her weak in the front line."
        }
    }];

    
    const [index, setIndex] = useState(0);
    const [character, setCharacter] = useState(characters[0]);
    const [fade, setFade] = useState(false);

    function handleClick(selection) {
        if (selection === "prev") {
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
        }

        setFade(true);        
        setTimeout(() => {
            setFade(false);
            setCharacter(characters[index]);
        }, 500);
    }

    return (
        <div className={classes.DailyUI5}>
            <h1>SELECT YOUR PLAYER</h1>
            <div className={classes.TopHalf}>
                <div className={classes.TopHalfContent}>
                    <Avatar />
                    <Stats character={character}/>
                </div>
            </div>
            <div className={classes.BottomHalf}>
                <div style={{opacity: fade && 0, transition: "opacity 0.5s linear"}}>
                    <Info character={character}/>
                </div>
                <div className={classes.Buttons}>
                    <button onClick={() => handleClick("prev")}>Prev</button>
                    <button onClick={() => handleClick("next")}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default DailyUI5;