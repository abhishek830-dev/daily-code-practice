import { useParams } from "react-router-dom";

const UserDetails = () => {
  //   const params = useParams();
  const { id, name } = useParams();

  return (
    <div>
      <h1>My user ID is : {id}</h1>
      <h2>My user name is : {name}</h2>
    </div>
  );
};

export default UserDetails;
