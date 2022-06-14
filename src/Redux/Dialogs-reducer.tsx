const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogData: [
    {
      id: 1,
      name: "Katya",
      ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oAlf6eD-4mrGrbTaWeg2Ec17AhQLgfuYBQ&usqp=CAU",
    },
    {
      id: 2,
      name: "Vasya",
      ava: "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg",
    },
    {
      id: 3,
      name: "Roma",
      ava: "http://pm1.narvii.com/7620/1e77e3a13124a5f7b3bf5484eb5c2da285b3d02cr1-700-690v2_uhq.jpg",
    },
    {
      id: 4,
      name: "Yuriy",
      ava: "https://papik.pro/uploads/posts/2021-09/1631997549_6-papik-pro-p-krutie-avatarki-risunki-6.jpg",
    },
    {
      id: 5,
      name: "Eugeniy",
      ava: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8f/8f160b5e9d954380c4b14b0f5ff4295ec9c141df_full.jpg",
    },
    {
      id: 6,
      name: "Alina",
      ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G3dnP1UUHCINfAEEv0m_LEqnZ9HEWcEFDQ&usqp=CAU",
    },
  ],
  messagesData: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How is your progress in React?" },
    { id: 3, message: "Yo bro!" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let stateCopy = { ...state };
      let newMessage = state.newMessageText;
      stateCopy.messagesData.push({ id: 4, message: newMessage });
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text: any) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
