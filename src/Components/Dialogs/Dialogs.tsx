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

const MessageItem = (props: any) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogData = [
    { id: 1, name: "Katya" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Roma" },
    { id: 4, name: "Yuriy" },
    { id: 5, name: "Eugeniy" },
    { id: 6, name: "Alina" },
  ];

  let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 1, message: "How is your progress in React?" },
    { id: 1, message: "Yo bro!" },
  ];

  let dialogs = dialogData.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messages = messagesData.map((m) => <MessageItem message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogs}</div>
      <div className={s.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
