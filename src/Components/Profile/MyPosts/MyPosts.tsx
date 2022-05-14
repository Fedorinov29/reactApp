import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi , its my first post on this page", likesCount: 5 },
    { id: 2, message: "And now i will show you ...", likesCount: 23 },
    { id: 3, message: "russian warship go fuck yourself", likesCount: 999 },
  ];

  return (
    <div>
      <h2>My Postttt</h2>
      <div className={s.addPost}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add new Post</button>
        </div>
      </div>
      <div>
        <Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        />
        <Post
          message={postData[2].message}
          likesCount={postData[2].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
