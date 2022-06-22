import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props: any) => {
  let postElement = props.posts.map((p: any) => (
    <Post message={p.message} key={p.id} likesCount={p.likesCount} />
  ));

  let newPostElement: any = React.createRef();

  let onAddPost = (): any => {
    props.addPost();
  };

  let onPostChange = (): any => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <h2>My Post</h2>
      <div className={s.addPost}>
        <div>
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          ></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add new Post</button>
        </div>
      </div>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;
