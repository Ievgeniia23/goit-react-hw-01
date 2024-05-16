import css from './Profile.module.css'



const Profile = (props) => {

    
    return (
             
        <div className={css.container}>
    <div>
        <img
        className={css.design}
        src = {props.image}
        alt={props.name}
        />
                
        <p className={css.textName}>{props.name}</p>
        <p className={css.tag}>@{props.tag}</p>
        <p className={css.location}>{props.location}</p>
    </div>

    <ul className={css.list}>
        <li className={css.item}>
        <span>Followers</span>
        <span className={css.number}>{props.stats.followers}</span>
        </li>
        <li className={css.item}>
        <span>Views</span>
        <span className={css.number}>{props.stats.views}</span>
        </li>
        <li className={css.item}>
        <span>Likes</span>
        <span className={css.number}>{props.stats.likes}</span>
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
