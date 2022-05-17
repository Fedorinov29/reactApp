import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props: any) => {
  let postElement = props.state.map((p: any) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div>
      <h2>My Post</h2>
      <div className={s.addPost}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add new Post</button>
        </div>
      </div>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;
