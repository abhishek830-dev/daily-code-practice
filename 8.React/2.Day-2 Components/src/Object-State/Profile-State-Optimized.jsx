import { useState } from "react";
const ProfileObjState = () => {
  const [profile, setprofile] = useState({
    name: "Abhishek",
    age: "22",
    country: "India",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setprofile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>
        My name is {profile.name} & age is {profile.age} & country is{" "}
        {profile.country}
        <input
          type="text"
          name="name"
          placeholder="Enter the name"
          value={profile.name}
          onChange={handleInputChange}
        />
        <input
          type="int"
          name="age"
          placeholder="Enter the age"
          value="profile.age"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Enter the country"
          value="profile.country"
          onChange={handleInputChange}
        />
      </h1>
    </>
  );
};
export default ProfileObjState;
