import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/Dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import MessageItem from "./Message/Message";

const Dialogs = (props: any) => {
  // debugger;
  let state = props.store.getState().dialogsPage;

  let dialogs = state.dialogData.map((d: any) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));
  let messages = state.messagesData.map((m: any) => (
    <MessageItem message={m.message} />
  ));

  let sendNewMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (e: any) => {
    let text = e.target.value;
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogs}</div>
      <div className={s.messages}>
        {messages}
        <div>
          <textarea value={props.NewMessageText} onChange={onMessageChange} />
        </div>
        <div>
          <button onClick={sendNewMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
