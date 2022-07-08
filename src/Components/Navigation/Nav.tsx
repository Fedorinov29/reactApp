import { NavLink } from "react-router-dom";
import FriendOnline from "./FriendOnline/FriendOnline";
import s from "./Nav.module.css";

const Nav = (props: any) => {
  let activeStyle: any = {
    color: "gold",
  };
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Messagess
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/users"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Users
        </NavLink>
      </div>
      <FriendOnline state={props.sideBar.sideBar} />
    </nav>
  );
};

export default Nav;
