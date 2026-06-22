import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Homepage</h1>
      <Link to="/about">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/random">random</Link>
      <Link to="/users">UsersList</Link>
      <Link to="/search">Search-Params</Link>
      <Link to="/color-picker">Color Picker</Link>
      <Link to="/dynamic-params">DynamicQueryParams</Link>
      <Link to="/flipkart">Flipkart Page</Link>
      <Link to="/participants">Google Meet Users</Link>
    </div>
  );
};

export default Homepage;
