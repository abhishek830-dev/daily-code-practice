import { Link } from "react-router-dom";

const Aboutpage = () => {
  return (
    <div>
      <h1>Welcome to About page</h1>
      <Link to="/home">Homepage</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
export default Aboutpage;
