import React, {useState} from "react";
import {connect} from "react-redux";

import Challenger from "./Challenger/Challenger";

import classes from "./FunCalculator.module.css";
import * as actions from "../../../store/actions/calculator";


const FunCalculator = (props) => {
    const [stats, setStats] = useState({
        feet: "",
        inches: "",
        powerUp: "Power Up!"
    });
    const [img, setImg] = useState(null);

    let enemy;

    function handleChange(event) {
        const {name, value} = event.target;

        setStats(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * 9);
        const randomChance = Math.random() * 10;
        const height = (parseInt(stats.feet * 12)) + parseInt(stats.inches);
        let result;
        let chance = 10;

        if (height >= 72) {
            chance = 7;
        } else if (height >= 65) {
            chance = 8.5;
        }

        if (randomNumber <= 2) {
            enemy = "Goomba";
            setImg("https://i.pinimg.com/originals/fa/6e/ba/fa6eba11a5df9ad2dec43e96335b8af8.jpg");
            
            if ((stats.powerUp === "fire" || stats.powerUp === "jump") && chance > randomChance) {
                result = "VICTORY SCREECH!"
            } else {
                result = "GAME OVER"
            }
            
        } else if (randomNumber >= 6) {
            enemy = "Chill Penguin";
            setImg("https://www.gameinformer.com/s3/files/styles/body_default/s3/legacy-images/imagefeed/There%20Is%20A%20Mega%20Man%20X%20Ringtone%20On%20Your%20iPhone/chillpenguin_610.jpg");
            
            if (stats.powerUp === "fire" && chance > randomChance) {
                result = "VICTORY SCREECH!"
            } else {
                result = "GAME OVER"
            }
            
        } else {
            enemy = "Squirtle";
            setImg("https://vignette.wikia.nocookie.net/pokemontowerdefensethree/images/f/f3/Squirtle.jpg/revision/latest?cb=20160806214440");

            if (stats.powerUp === "electricity" && chance > randomChance) {
                result = "VICTORY SCREECH!"
            } else {
                result = "GAME OVER"
            }
        }
        
        props.onSetHeader(result);
    }

    return (
        <div className={classes.FunCalculatorContainer} style={{width: props.show && "40rem"}}>
            <div className={classes.FunCalculator}>
                <h1>strongBoi</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Height: </label>
                        <input onChange={(event) => handleChange(event)} type="text" placeholder="Ft" name="feet" value={stats.feet}/>
                        <input onChange={(event) => handleChange(event)} type="text" placeholder="In" name="inches" value={stats.inches}/>
                    </div>
                    <select onChange={(event) => handleChange(event)} name="powerUp" value={stats.powerUp}>
                        <option disabled hidden>Power Up!</option>
                        <option value="fire">Fire</option>
                        <option value="electricity">Electricity</option>
                        <option value="jump">Jump</option>
                    </select>
                    <button>FIGHT</button>
                </form>
            </div>
            <Challenger show={props.show} img={img}/>
        </div>
    );
}   

const mapDispatchToProps = dispatch => {
    return {
        onSetHeader: (result) => dispatch(actions.setHeader(result))
    };
};

export default connect(null, mapDispatchToProps)(FunCalculator);