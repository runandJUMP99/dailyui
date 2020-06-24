import React from "react"

import classes from "./MegaMan.module.css";

const MegaMan = () => {
    return (
        <div className={classes.MegaMan}>
            <div className={classes.HelmetTop}></div>
            <div className={classes.HelmetShine}></div>
            <div className={classes.HelmetJewelTop}>
                <div></div>
            </div>
            <div className={classes.HelmetJewelBottom}>
                <div></div>
            </div>
            <div className={classes.HelmetBottom}></div>
            <div className={classes.HelmetEars}>
                <div className={classes.LeftEar}></div>
                <div className={classes.RightEar}></div>
            </div>
            <div className={classes.Face}>
                <div className={classes.LeftFace}></div>
                <div className={classes.RightFace}></div>
            </div>
            <div className={classes.FaceBottom}></div>
            <div className={classes.Eyes}>
                <div className={classes.LeftEye}></div>
                <div className={classes.RightEye}></div>
            </div>
            <div className={classes.Pupils}>
                <div className={classes.Pupil}>
                    <div className={classes.InnerPupil}></div>
                    <div className={classes.InnerInnerPupil}></div>
                    <div className={classes.InnerInnerInnerPupil}></div>
                    <div className={classes.PupilShine}></div>
                </div>
                <div className={classes.Pupil}>
                    <div className={classes.InnerPupil}></div>
                    <div className={classes.InnerInnerPupil}></div>
                    <div className={classes.InnerInnerInnerPupil}></div>
                    <div className={classes.PupilShine}></div>
                </div>
            </div>
            <div className={classes.Nose}></div>
            <div className={classes.Mouth}></div>
            <div className={classes.Chin}></div>
        </div>
    );
}

export default MegaMan;