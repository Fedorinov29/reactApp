import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./ProfileInfo/ProfileInfo.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
