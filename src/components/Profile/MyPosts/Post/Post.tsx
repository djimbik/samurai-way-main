import React from "react";
import classes from './Post.module.css';

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img className={classes.avatar} src="https://ru-static.z-dn.net/files/dec/b77ee4372e78bcc3a45293e0e0e2e979.jpg" alt="avatar"/>
            <div className={classes.message}>{props.message}</div>
            <div className={classes.likes}>
                <img className={classes.likesIcon} src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="likes-icon"/>
                <span className={classes.likesCount}>{props.likeCount}</span>
            </div>
        </div>
    )
}