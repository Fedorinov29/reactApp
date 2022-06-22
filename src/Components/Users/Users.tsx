const Users = (props: any) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY2YhMsJluE4eJFwPBIZu9k12vyBc7mRrnw&usqp=CAU",
        folowed: false,
        fullName: "Oleksii Fedorinov",
        status: "I will learn React!!!",
        location: {
          country: "Ukraine",
          city: "Kiev",
        },
      },
      {
        id: 2,
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY2YhMsJluE4eJFwPBIZu9k12vyBc7mRrnw&usqp=CAU",
        folowed: true,
        fullName: "Oleksii Fedorinov",
        status: "I will learn React!!!",
        location: {
          country: "Ukraine",
          city: "Kiev",
        },
      },
      {
        id: 3,
        folowed: false,
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY2YhMsJluE4eJFwPBIZu9k12vyBc7mRrnw&usqp=CAU",
        fullName: "Oleksii Fedorinov",
        status: "I will learn React!!!",
        location: {
          country: "Ukraine",
          city: "Kiev",
        },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u: any) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.photoUrl} alt="userAvatar" />
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
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
