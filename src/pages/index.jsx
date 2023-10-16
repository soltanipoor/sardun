import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <h1>pages:</h1>
      <ul>
        <li>
          <Link to="/auth">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default index;
