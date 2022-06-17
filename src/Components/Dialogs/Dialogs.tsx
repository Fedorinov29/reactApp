import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import MessageItem from "./Message/Message";

const Dialogs = (props: any) => {
  // debugger;
  let dialogs = props.dialogsPage.dialogData.map((d: any) => (
    <DialogItem name={d.name} key={d.id} id={d.id} ava={d.ava} />
  ));
  let messages = props.dialogsPage.messagesData.map((m: any) => (
    <MessageItem message={m.message} key={m.id} />
  ));

  let sendNewMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e: any) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogs}</div>
      <div className={s.messages}>
        {messages}
        <div>
          <textarea value={props.newMessageText} onChange={onMessageChange} />
        </div>
        <div>
          <button onClick={sendNewMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
