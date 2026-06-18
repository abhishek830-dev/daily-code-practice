import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <h1>Welcome to Homepage</h1>
            <Link to="/about">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/random">random</Link>
            <Link to="/users">UsersList</Link>

        </div>
    );
};

export default Homepage;