import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Abhishek" },
    { id: 3, name: "Tarun" },
    { id: 4, name: "Deepak" },
    { id: 5, name: "Uvesh" },
  ]);

  return (
    <div>
      <h1>My Users</h1>
      <ul>
        {users.map((item) => (
          <li key={item.id} onClick={() => navigate(`/users/${item.id}/${item.name}`)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
