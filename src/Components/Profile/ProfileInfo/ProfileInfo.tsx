import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props: any) => {
  return (
    <div>
      <div>
        <img
          src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
          alt="bg"
          className={s.bg}
        />
      </div>
      <div>Ava + description</div>
    </div>
  );
};

export default ProfileInfo;
