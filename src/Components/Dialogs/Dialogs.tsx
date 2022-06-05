import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import MessageItem from "./Message/Message";

const Dialogs = (props: any) => {
  let dialogs = props.dialogsPage.dialogData.map((d: any) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));
  let messages = props.dialogsPage.messagesData.map((m: any) => (
    <MessageItem message={m.message} />
  ));
  let newMessageElement: any = React.createRef();

  let sendNewMessage = () => {
    props.dispatch({
      type: "ADD-MESSAGE",
    });
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({
      type: "UPDATE-NEW-MESSAGE-TEXT",
      newText: text,
    });
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogs}</div>
      <div className={s.messages}>
        {messages}
        <div>
          <textarea
            ref={newMessageElement}
            value={props.NewMessageText}
            onChange={onMessageChange}
          />
        </div>
        <div>
          <button onClick={sendNewMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
