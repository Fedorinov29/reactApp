import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./ProfileInfo/ProfileInfo.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        state={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
