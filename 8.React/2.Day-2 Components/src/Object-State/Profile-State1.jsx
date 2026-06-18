import {useState} from "react"

const ProfileObjState = () => {
  const [profile, setProfile] = useState({
    name: "Abhishek",
    age: "23",
    address: "Morena",
  });

  return (
    <div>
      <h1>
        My name is {profile.name} & my age is {profile.age} & address is {profile.address}
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
        type="int"
        placeholder="Enter the age"
        value={profile.age}
        onChange={(e) => {
          setProfile({ ...profile, age: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="Enter the address"
        value={profile.address}
        onChange={(e) => {
          setProfile({ ...profile, address: e.target.value });
        }}
      />
    </div>
  );
};
export default ProfileObjState