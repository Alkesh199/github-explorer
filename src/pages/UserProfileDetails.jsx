import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserProfileDetails = () => {
  const { user } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();
      setProfile(data);
    };
    loadProfile();
  }, [user]);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <main>
      <Link to="/">Back to profiles</Link>
      <img src={profile.avatar_url} alt={profile.login} width="120" height="120" />
      <h1>{profile.name || profile.login}</h1>
      <p>@{profile.login}</p>
      <p>{profile.bio || "No bio available"}</p>
      <p>Repositories: {profile.public_repos}</p>
      <a href={profile.html_url} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </main>
  );
};

export default UserProfileDetails;
