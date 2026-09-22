import { useState, useEffect, useContext } from "react";
import ProfileCard from "../components/ProfileCard";
import { AppContext } from "../context/Context";
import "../styles/userProfilePage.css";

// here will make an api call to get list of default use
const UserProfilePage = () => {
  const [userList, setUserList] = useState([]);
  const [headingText, setHeadingText] = useState("");
  const { filteredProfilesText } = useContext(AppContext);
  console.log("filteredProfileText is ", filteredProfilesText);

  useEffect(() => {
    if (filteredProfilesText) {
      loadUserFilteredProfiles(filteredProfilesText);
    } else {
      loadDefaultUsers();
    }
  }, [filteredProfilesText]);

  const loadDefaultUsers = async () => {
    const response = await fetch("https://api.github.com/users?per_page=200");
    const data = await response.json();
    setHeadingText("Top Default Profiles");
    setUserList(data);
  };

  const loadUserFilteredProfiles = async (query) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`,
    );
    const data = await response.json();
    if(data.items.length > 0){
        setHeadingText("Filtered Profiles");
    setUserList(data.items);
    }
    else{
        setUserList([]);
    }
    
  };

  return (
    <section className="user-profile-page">
      <div className="profile-heading">
        <p>{headingText}</p>
      </div>
      <div className="profile-list">
        {userList.length > 0 ? (
          userList.map((user) => <ProfileCard key={user.id} user={user} />)
        ) : (
          <p>No user yet</p>
        )}
      </div>
    </section>
  );
};

export default UserProfilePage;
