import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message = {'Hi, how are you?'} likeCount = {15}/>
            <Post message = {'Its my first post'} likeCount = {20}/>
        </div>
    )
}