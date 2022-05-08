import React from "react";
import s from "./Post.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Postttt
      <div>New Post</div>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
