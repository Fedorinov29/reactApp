import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props: any) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <img src={props.ava} alt="ava to dialogs friend" />
      <NavLink to={path}>{props.name}</NavLink>{" "}
    </div>
  );
};

export default DialogItem;
