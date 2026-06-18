import { Link } from "react-router-dom";

const Contactpage = () => {
  return (
    <div>
      <h1>Welcome to Contact page</h1>
      <Link to="/home">Homepage</Link>
      <Link to="/about">About</Link>
    </div>
  );
};
export default Contactpage;
