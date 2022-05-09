import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Postttt
      <div className={s.addPost}>
        <textarea></textarea>
        <button>Add new Post</button>
      </div>
      <div>
        <Post message="Hi , its my first post on this page" likesCount="5" />
        <Post message="And now i will show you ..." likesCount="23" />
        <Post message="russian warship go fuck yourself" likesCount="999" />
      </div>
    </div>
  );
};

export default MyPosts;
