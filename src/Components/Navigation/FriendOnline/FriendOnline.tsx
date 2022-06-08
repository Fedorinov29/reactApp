import React from "react";
import Friend from "./Friend/Friend";
import s from "./FriendOnline.module.css";

const FriendOnline = (props: any) => {
  let friendsOnline = props.state.sideBar.friendOnline.map((f: any) => (
    <Friend id={f.id} friendName={f.friendName} friendAva={f.friendAva} />
  ));
  return (
    <div className={s.frOnline}>
      <h2>Friends Online</h2>
      <div className={s.online}>{friendsOnline}</div>
    </div>
  );
};
export default FriendOnline;
