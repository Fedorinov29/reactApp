const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

const UsersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u: any) => {
          if (u.id === action.userID) {
            return { ...u, folowed: true };
          }
          return u;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u: any) => {
          if (u.id === action.userID) {
            return { ...u, folowed: false };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userID: number) => ({ type: FOLLOW, userID });

export const unfollowAC = (userID: number) => ({
  type: UNFOLLOW,
  userID,
});

export const setUsersAC = (users: any) => ({
  type: SET_USERS,
  users,
});

export default UsersReducer;
