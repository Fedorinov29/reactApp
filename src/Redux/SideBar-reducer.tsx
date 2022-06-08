let initialState = {
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
const sideBarReducer = (state = initialState, action: any) => {
  return state;
};

export default sideBarReducer;
