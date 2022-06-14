import { connect } from "react-redux";
import Nav from "./Nav";

const mapStateToProps = (state: any) => {
  return {
    sideBar: state.sideBar,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
