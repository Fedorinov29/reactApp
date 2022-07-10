import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  unfollowAC,
  setCurrsetTotalUsersCountAC,
} from "../../Redux/Users-reducer";
import axios from "axios";
import React from "react";
import Users from "./Users";

class UsersAPIComponent extends React.Component<{
  users: any;
  setUsers: any;
  follow: any;
  unfollow: any;
  totalUsersCount: any;
  pageSize: any;
  currentPage: any;
  setCurrentPage: any;
  setTotalUsersCount: any;
}> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPAgeChenge = (pageNumber: any) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPAgeChenge={this.onPAgeChenge}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
