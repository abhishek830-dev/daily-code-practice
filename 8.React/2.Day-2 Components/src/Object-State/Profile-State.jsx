import { useState } from "react";

const ProfileObjState = () => {
  const [profile, setProfile] = useState({
    name: "Abhishek",
    city: "Morena",
    email: "abhishek@gmail.com",
  });

  //console.log("Profile: ", profile);

  return (
    <div>
      <h1>
        My name is {profile.name} & I am from {profile.city} & email is{" "}
        {profile.email}.
      </h1>

      <input
        type="text"
        placeholder="Enter the name"
        value={profile.name}
        onChange={(e) => {
          setProfile({ ...profile, name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter the city"
        value={profile.city}
        onChange={(e) => {
          setProfile({ ...profile, city: e.target.value });
        }}
      />
      <input
        type="email"
        placeholder="Enter the email"
        value={profile.email}
        onChange={(e) => {
          setProfile({ ...profile, email: e.target.value });
        }}
      />
    </div>
  );
};
export default ProfileObjState;
