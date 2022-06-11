import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props: any) => {
  // debugger;
  let state = props.store.getState().dialogsPage;

  let sendNewMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text: any) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      updateNewMessageText={onMessageChange}
      addMessage={sendNewMessage}
      dialogsPage={state}
      newMessageText={state.newMessageText}
    />
  );
};

export default DialogsContainer;
