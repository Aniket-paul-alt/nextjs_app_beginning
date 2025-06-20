"use client";

import { use } from "react";

export default function singleUserPagePost(props) {
    console.log(props)
    const postData = use(props.params)
    console.log(postData)

    return (
        <div>
        <h1>Username: {postData.username}</h1>
        <h2>Post ID: {postData.postid}</h2>
        </div>
    );
}