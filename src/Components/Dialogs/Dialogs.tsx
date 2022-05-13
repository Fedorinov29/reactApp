import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props: any) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>{" "}
    </div>
  );
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name="Katya" id="1" />
        <DialogItem name="Vasya" id="2" />
        <DialogItem name="Roma" id="3" />
        <DialogItem name="Yuriy" id="4" />
        <DialogItem name="Eugeniy" id="5" />
        <DialogItem name="Alina" id="6" />
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>How is your progress in React?</div>
        <div className={s.message}>Yo!</div>
      </div>
    </div>
  );
};

export default Dialogs;
