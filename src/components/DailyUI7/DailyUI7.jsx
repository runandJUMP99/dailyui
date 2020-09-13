import React, {useEffect, useState} from "react";

import Moods from "./Moods/Moods";
import Sliders from "./Sliders/Sliders";

import classes from "./DailyUI7.module.css";

const DailyUI7 = () => {
    const [sliders, setSliders] = useState({
        Temp: 72.5,
        Volume: 50,
        Lights: 50
    });
    const [jumboValue, setJumboValue] = useState(10);
    const [jumboStyle, setJumboStyle] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setJumboStyle({display: "block", opacity: 0});
            
            const secondTimeout = setTimeout(() => {
                setJumboStyle({display: "none"})
            }, 1000);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, [jumboValue]);

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
            setJumboValue(sliders[name] + 1);
        } else {
            setSliders(prevValues => {
                return {
                    ...prevValues,
                    [name]: prevValues[name] - 1
                };
            });
            setJumboValue(sliders[name] - 1);
        }

        setJumboStyle({display: "block", opacity: 1});
    }

    function handleSlide(event) {
        const {name, value} = event.target;

        setSliders(prevValues => {
            return {
                ...prevValues,
                [name]: parseInt(value)
            }
        });

        setJumboValue(parseInt(value));
        setJumboStyle({display: "block", opacity: 1});

        // setTimeout(() => {
        //     setJumboStyle({display: "block", opacity: 0});
            
        //     setTimeout(() => {
        //         setJumboStyle({display: "none"})
        //     }, 1000);
        // }, 2000);
    }

    return (
        <div className={classes.DailyUI7}>
            <h1 className={classes.JumboValue} style={jumboStyle}>{jumboValue}</h1>
            <h1>Repose</h1>
            <Sliders onSlide={handleSlide} onChange={handleAdjustment} values={sliders}/>
            <Moods onClick={handleClick}/>
            <img src="https://firebasestorage.googleapis.com/v0/b/dailyui-80a05.appspot.com/o/repose%2FSleep.svg?alt=media&token=0cf4b845-5c4c-4b7a-9673-11544d2e9253" alt=""/>
        </div>
    );
}

export default DailyUI7;