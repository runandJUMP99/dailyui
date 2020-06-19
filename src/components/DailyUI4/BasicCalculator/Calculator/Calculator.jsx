import React, {useState} from "react";

import BackspaceIcon from '@material-ui/icons/Backspace';
import CalcButton from "./CalcButton/CalcButton";

import classes from "./Calculator.module.css";

const Calculator = () => {
    const [display, setDisplay] = useState(0);
    const [storedValue, setStoredValue] = useState(0);
    const [storedOperator, setStoredOperator] = useState(null);

    function handleClick(button) {
        if ((display === 0 || display === "0") && (button === "0" || button === "1" || button === "2" || button === "3" || button === "4" || button === "5" || button === "6"|| button === "7"|| button === "8"|| button === "9")) {
            setDisplay(button);
        } else if (button === "0" || button === "1" || button === "2" || button === "3" || button === "4" || button === "5" || button === "6"|| button === "7"|| button === "8"|| button === "9") {
            setDisplay(prevValue => (
                prevValue + button
            ));
        } else if (button === "+" || button === "-" || button === "x" || button === "÷" || button === "=" || button === "+/-" || button === "." || button === "%" || button === "C") {
            switch (button) {
                case "+":
                    setStoredValue(parseInt(display));
                    setStoredOperator("+");
                    setDisplay (0);
                    break;
                case "-":
                    setStoredValue(parseInt(display));
                    setStoredOperator("-");
                    setDisplay (0);
                    break;
                case "x":
                    setStoredValue(parseInt(display));
                    setStoredOperator("x");
                    setDisplay (0);
                    break;
                case "÷":
                    setStoredValue(parseInt(display));
                    setStoredOperator("÷");
                    setDisplay (0);
                    break;
                case "=":
                    switch (storedOperator) {
                        case "+":
                            setDisplay(prevValue => (
                                parseInt(prevValue) + storedValue
                            ));
                            break;
                        case "-":
                            setDisplay(prevValue => (
                                storedValue - parseInt(prevValue)
                            ));
                            break;
                        case "x":
                            setDisplay(prevValue => (
                                storedValue * parseInt(prevValue)
                            ));
                            break;
                        case "÷":
                            setDisplay(prevValue => (
                                storedValue / parseInt(prevValue)
                            ));
                            break;
                        default:
                            break;
                    }
    
                    setStoredValue(null);
                    setStoredOperator(null);
                    break;
                case "C":
                    setDisplay(0);
                    setStoredValue(0);
                    setStoredOperator(null);
                    break;
                case "+/-":
                    setDisplay(prevValue => (
                        prevValue * -1
                    ));
                    break;
                default:
                    setDisplay(0);
                    setStoredValue(0);
                    setStoredOperator(null);
                    break;
            }
        } else {
            if (display === 0 || display.length === 1) {
                setDisplay(0);
            } else {
                setDisplay(prevValue => (
                    prevValue.slice(0, prevValue.length - 1)
                ));
            }
        }
    }

    return (
        <div className={classes.Calculator}>
            <h1>uBasic</h1>
            <div className={classes.Display}>
                {display}
            </div>
            <div className={classes.Row}>
                <CalcButton onClick={handleClick} button="%"/>
                <CalcButton onClick={handleClick} button="C"/>
                <CalcButton onClick={handleClick} button={<BackspaceIcon />}/>
                <CalcButton onClick={handleClick} button="÷"/>
            </div>
            <div className={classes.Row}>
                <CalcButton onClick={handleClick} button={"7"}/>
                <CalcButton onClick={handleClick} button={"8"}/>
                <CalcButton onClick={handleClick} button={"9"}/>
                <CalcButton onClick={handleClick} button="x"/>
            </div>
            <div className={classes.Row}>
                <CalcButton onClick={handleClick} button={"4"}/>
                <CalcButton onClick={handleClick} button={"5"}/>
                <CalcButton onClick={handleClick} button={"6"}/>
                <CalcButton onClick={handleClick} button="-"/>
            </div>
            <div className={classes.Row}>
                <CalcButton onClick={handleClick} button={"1"}/>
                <CalcButton onClick={handleClick} button={"2"}/>
                <CalcButton onClick={handleClick} button={"3"}/>
                <CalcButton onClick={handleClick} button="+"/>
            </div>
            <div className={classes.Row}>
                <CalcButton onClick={handleClick} button="+/-"/>
                <CalcButton onClick={handleClick} button={"0"}/>
                <CalcButton onClick={handleClick} button="."/>
                <CalcButton onClick={handleClick} button="="/>
            </div>
        </div>
    );
}

export default Calculator;