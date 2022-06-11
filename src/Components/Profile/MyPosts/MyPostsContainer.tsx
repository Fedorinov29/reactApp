import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props: any) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text: any) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
