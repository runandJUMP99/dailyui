import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import BasicCalculator from "./BasicCalculator/BasicCalculator";
import FunCalculator from "./FunCalculator/FunCalculator";

import classes from "./DailyUI4.module.css";
import * as actions from "../../store/actions/calculator";

const DailyUI4 = (props) => {
    const [showBasic, setShowBasic] = useState(true);
    const [showFun, setShowFun] = useState(true);
    const [hoverBasic, setHoverBasic] = useState(false);
    const [hoverFun, setHoverFun] = useState(false);
    const [positionBasic, setPositionBasic] = useState(false);
    const [positionFun, setPositionFun] = useState(false);
    const [style, setStyle] = useState(null);
    
    useEffect(() => {
        if (props.header === "GAME OVER") {
            setStyle({
                background: "red",
                height: "100%",
                opacity: 0.8,
                width: "100%"
            });
    
            setTimeout(() => {
                setStyle(prevValue => {
                    return {
                        ...prevValue,
                        opacity: 0
                    };
                });
            }, 200);
        }
    }, [props.header]);    
    
    function handleMouseOver(selection) {
        if (selection === "basic") {
            setHoverBasic(true);
        } else if (selection === "fun") {
            setHoverFun(true);
        }
    }
    
    function handleMouseOut(selection) {
        if (selection === "basic") {
            setHoverBasic(false);
        } else if (selection === "fun") {
            setHoverFun(false);
        }
    }

    function handleClick(selection) {
        if (selection === "basic") {
            setShowBasic(false);
            setShowFun(true);
            setPositionBasic(false);
            setPositionFun(true);
            props.onSetHeader("Calculator")
        } else if (selection === "fun") {
            setShowBasic(true);
            setShowFun(false);
            setPositionBasic(true);
            setPositionFun(false);
            props.onSetHeader("Let Battle Be Joined...")
        }
    }

    return (
        <div className={classes.DailyUI4}>
            <div className={classes.LightEffect} style={style}></div>
            <h1 className={classes.MainHeading}>{props.header}</h1>
            <div className={classes.Calculators}>
                <div className={classes.Calculator} style={{
                    bottom: positionBasic && "-25rem",
                    left: positionBasic && "2rem",
                    opacity: positionBasic && "0.5",
                    position: positionBasic && "absolute",
                    transform: hoverBasic && "translateY(-3rem)",
                    zIndex: !positionBasic && "5"
                }}>
                    <div onMouseOut={() => handleMouseOut("basic")} onMouseOver={() => handleMouseOver("basic")} onClick={() => handleClick("basic")} className={classes.SelectionBox} style={{
                        display: showBasic ? "block" : "none"
                    }}></div>
                    <BasicCalculator />
                </div>
                <div className={classes.Calculator} style={{
                    bottom: positionFun && "-25rem",
                    opacity: positionFun && "0.5",
                    position: positionFun && "absolute",
                    right: positionFun && "2rem",
                    transform: hoverFun && "translateY(-3rem)",
                    zIndex: !positionFun && "5"
                }}>
                    <div onMouseOut={() => handleMouseOut("fun")} onMouseOver={() => handleMouseOver("fun")} onClick={() => handleClick("fun")} className={classes.SelectionBox} style={{
                        display: showFun ? "block" : "none"
                    }}></div>
                   <FunCalculator show={!showFun}/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        header: state.calculator.header
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetHeader: (result) => dispatch(actions.setHeader(result))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyUI4);