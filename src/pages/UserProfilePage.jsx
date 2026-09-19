import { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import "../styles/userProfilePage.css";

// here will make an api call to get list of default use
const UserProfilePage = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    loadDefaultUsers();
  }, []);

  const loadDefaultUsers = async () => {
    const response = await fetch("https://api.github.com/users?per_page=200");
    const data = await response.json();
    setUserList(data);
    console.log(data);
  };

  return (
    <section className="user-profile-page">
    <div className="profile-heading">
        <p>Top Profiles</p>
    </div>  
     <div className="profile-list">
      {userList.length > 0 ? (
        userList.map((user) => <ProfileCard key={user.id} user={user} />)
      ) : (
        <p>No default user yet</p>
      )}
      </div>
    </section>
  );
};

export default UserProfilePage;
