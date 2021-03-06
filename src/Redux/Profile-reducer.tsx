const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPADATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi , its my first post on this page",
      likesCount: 5,
    },
    { id: 2, message: "And now i will show you ...", likesCount: 23 },
    { id: 3, message: "russian warship go fuck yourself", likesCount: 999 },
  ],
  newPostText: "Learn React!!!",
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text: any) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
