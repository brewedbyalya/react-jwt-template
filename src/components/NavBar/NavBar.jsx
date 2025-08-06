import { Link } from "react-router";
const NavBar = () => {
  return (
    <nav>
      <Link to='/'> Home </Link>
      <Link to='/sign-up'>Sign Up</Link>
    </nav>
  );
};

export default NavBar;