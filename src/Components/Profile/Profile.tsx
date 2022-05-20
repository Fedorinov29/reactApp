import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./ProfileInfo/ProfileInfo.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
  debugger;
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts state={props.state.posts} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
