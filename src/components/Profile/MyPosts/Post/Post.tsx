import React from "react";
import classes from './Post.module.css';

type PostPropsType = {
    message: string
    likeCount: number
}
export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img src="https://ru-static.z-dn.net/files/dec/b77ee4372e78bcc3a45293e0e0e2e979.jpg" alt="avatar"/>
            {props.message}
            <div>
                <span>likes: {props.likeCount}</span>
            </div>
        </div>
    )
}