import "../styles/profileCard.css";
import { Link } from "react-router-dom";

const ProfileCard = ({user}) =>{
    return(
        <Link className="profile-card" to={`/profile/${user.login}`}>
            <div>
                <img src = {user.avatar_url}></img>
            </div>
            <div>
                <p className="user-name">{user.login}</p>
                <span>{user.html_url}</span>
            </div>
        </Link>
    )
}

export default ProfileCard;