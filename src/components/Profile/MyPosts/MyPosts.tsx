import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {myPostsPropsType} from "../Profile";

export const MyPosts = (props: myPostsPropsType) => {

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {
                    props.postData.map(item => <Post message={item.message} likeCount={item.likeCount}/>)
                }
            </div>
        </div>
    )
}