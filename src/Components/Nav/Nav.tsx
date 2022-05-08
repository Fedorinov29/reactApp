import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a href="-">Profile</a>
      </div>
      <div>
        <a href="-">Messagess</a>
      </div>
      <div>
        <a href="-">News</a>
      </div>
      <div>
        <a href="-">Music</a>
      </div>
      <div>
        <a href="-">Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
