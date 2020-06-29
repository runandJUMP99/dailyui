import React, {useState} from "react";

import Moods from "./Moods/Moods";
import Sliders from "./Sliders/Sliders";

import classes from "./DailyUI7.module.css";

const DailyUI7 = () => {
    const [sliders, setSliders] = useState({
        Temp: 72.5,
        Volume: 50,
        Lights: 50
    });

    function handleClick(selection) {
        switch(selection) {
            case "star":
                setSliders({
                    Temp: 72,
                    Volume: 72,
                    Lights: 65
                });
                break;
            case "moon":
                setSliders({
                    Temp: 82,
                    Volume: 90,
                    Lights: 85
                });
                break;
            case "planet":
                setSliders({
                    Temp: 69,
                    Volume: 75,
                    Lights: 30
                });
                break;
            default:
                break;
        }
    }

    function handleAdjustment(name, selection) {
        if (selection === "increase") {
            setSliders(prevValues => {
                return {
                    ...prevValues,
                    [name]: prevValues[name] + 1
                };
            });
        } else {
            setSliders(prevValues => {
                return {
                    ...prevValues,
                    [name]: prevValues[name] - 1
                };
            });
        }    
    }

    function handleSlide(event) {
        const {name, value} = event.target;

        console.log(name, value);

        setSliders(prevValues => {
            return {
                ...prevValues,
                [name]: parseInt(value)
            }
        });

        console.log(sliders);
    }

    return (
        <div className={classes.DailyUI7}>
            <h1>Calm</h1>
            <Sliders onSlide={handleSlide} onChange={handleAdjustment} values={sliders}/>
            <Moods onClick={handleClick}/>
        </div>
    );
}

export default DailyUI7;