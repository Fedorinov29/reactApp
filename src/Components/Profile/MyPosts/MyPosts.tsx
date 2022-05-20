import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props: any) => {
  debugger;
  let postElement = props.state.map((p: any) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement: any = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div>
      <h2>My Post</h2>
      <div className={s.addPost}>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add new Post</button>
        </div>
      </div>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;
