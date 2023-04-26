import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://privately.ru/note/uploads/posts/2019-10/privately.ru_dozhdlivaja-grust-ulic-7.jpg"
                     alt="rain in seattle"/>
            </div>
            <div>
                ava + desription
            </div>
            <MyPosts/>
        </div>
    )
}