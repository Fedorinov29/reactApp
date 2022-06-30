import axios from "axios";
import React from "react";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component<{
  users: any;
  setUsers: any;
  follow: any;
  unfollow: any;
}> {
  getUsers = (): any => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Upload Users</button>
        {this.props.users.map((u: any) => {
          return (
            <div key={u.id}>
              <span>
                <div>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt="userAvatar"
                  />
                </div>
                <div>
                  {u.folowed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{"u.location.city"}</div>
                  <div>{"u.location.country"}</div>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
