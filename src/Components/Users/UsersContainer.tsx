import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  unfollowAC,
  setCurrsetTotalUsersCountAC,
} from "../../Redux/Users-reducer";
import Users from "./Users";

let mapStateToProps = (state: any) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    follow: (userId: any) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: any) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: any) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber: any) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount: any) => {
      dispatch(setCurrsetTotalUsersCountAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
