import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state: any) => {
  // debugger;
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch: any) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (text: any) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
