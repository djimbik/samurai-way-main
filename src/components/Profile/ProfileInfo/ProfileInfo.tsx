import React from "react";
import classes from './ProfileInfo.module.css'


export function ProfileInfo() {
    return (
        <div className={classes.imgBlock}>
            <div>
                <img src="https://privately.ru/note/uploads/posts/2019-10/privately.ru_dozhdlivaja-grust-ulic-7.jpg"
                     alt="rain in seattle"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + desription
            </div>
        </div>
    )
}