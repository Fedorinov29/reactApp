import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = (props: any) => {
  let pagesCount = props.totalUsersCount / props.pageSize;
  let pages = [];
  for (let i = 1; i <= Math.ceil(10); i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p ? s.activePage : ""}
              onClick={(e) => {
                props.onPAgeChenge(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u: any) => {
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
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
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
};

export default Users;
