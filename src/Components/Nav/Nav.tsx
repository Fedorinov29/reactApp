import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={`${s.item} ${s.active}`}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={s.item}>
          Messagess
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={s.item}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={s.item}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={s.item}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
