let rerenderEntireTree = () => {
  console.log("state is change");
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi , its my first post on this page", likesCount: 5 },
      { id: 2, message: "And now i will show you ...", likesCount: 23 },
      { id: 3, message: "russian warship go fuck yourself", likesCount: 999 },
    ],
    newPostText: "Learn React!!!",
  },
  dialogsPage: {
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
    newMessageText: "train redux concept!",
  },
  sideBar: {
    friendOnline: [
      {
        id: 1,
        friendAva:
          "https://www.meme-arsenal.com/memes/e6adac8c2b0d7958ff9fa0964cf49a6d.jpg",
        friendName: "Kate",
      },
      {
        id: 2,
        friendAva:
          "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg",
        friendName: "Vasya",
      },
      {
        id: 3,
        friendAva: "https://www.isnotdown.com/assets/pics/avatars-.png",
        friendName: "Evgen",
      },
    ],
  },
};

export const addNewPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const sendNewMessage = () => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
