
const Profile = (props) => {
    return (
             
    <div>
    <div>
        <img
        src = {props.avatar}
        alt = {props.username}
        />
        <p>{props.username}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
    </div>

    <ul>
        <li>
        <span>Followers</span>
        <span>{props.stats.followers}</span>
        </li>
        <li>
        <span>Views</span>
        <span>{props.stats.views}</span>
        </li>
        <li>
        <span>Likes</span>
        <span>{props.stats.likes}</span>
        </li>
    </ul>
    </div>

)
}
export default Profile





// Спроба деструктуризації


// const Profile = ({ avatar, username, tag, location, stats: { followers }, stats: { views }, stats: { likes } }) => {
//     return (
             
//     <div>
//     <div>
//         <img
//         src = {avatar}
//         alt = {username}
//         />
//         <p>{username}</p>
//         <p>@{tag}</p>
//         <p>{location}</p>
//     </div>

//     <ul>
//         <li>
//         <span>Followers</span>
//         <span>{followers}</span>
//         </li>
//         <li>
//         <span>Views</span>
//         <span>{views}</span>
//         </li>
//         <li>
//         <span>Likes</span>
//         <span>{likes}</span>
//         </li>
//     </ul>
//     </div>

// )
// }
