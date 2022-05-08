import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://assets.gq.ru/photos/5d9f45713a54c0000840d54d/16:9/w_2560%2Cc_limit/0.jpg"
        alt=""
      />{" "}
      Post 1
    </div>
  );
};

export default Post;
