import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postDataType} from "../../redux/state";

export type myPostsPropsType = {
    postData: postDataType
}

export const Profile = (props: myPostsPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData = {props.postData}/>
        </div>
    )
}