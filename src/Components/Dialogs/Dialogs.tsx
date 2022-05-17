import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import MessageItem from "./Message/Message";

const Dialogs = (props: any) => {
  let dialogs = props.state.dialogData.map((d: any) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));
  let messages = props.state.messagesData.map((m: any) => (
    <MessageItem message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogs}</div>
      <div className={s.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
