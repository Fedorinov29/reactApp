import React from "react";
import s from "./Friend.module.css";

const Friend = (props: any) => {
  return (
    <div>
      <img src={props.friendAva} alt="friend avatar" />
      <div>{props.friendName}</div>
    </div>
  );
};

export default Friend;
