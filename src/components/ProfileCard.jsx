import "../styles/profileCard.css";
import { Link } from "react-router-dom";

const ProfileCard = ({user}) =>{
    return(
        <div className="profile-card">
            <div>
                <img src = {user.avatar_url}></img>
            </div>
            <div>
                <p className="user-name">{user.login}</p>
                <Link to={user.html_url}>{user.html_url}</Link>

            </div>
        </div>
    )
}

export default ProfileCard;