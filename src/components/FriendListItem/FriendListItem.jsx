import css from './FriendListItem.module.css'
import clsx from "clsx";


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (

<div>
          <img className={css.frnAvatar}
              src={avatar}
              alt="Avatar"
              width="48" />
          <p className={css.frnName}>{name}</p>
       <p className={isOnline ?  css.online : css.offline}>{isOnline ?  "Online" : "Offline"}</p>
</div>
  
  )

}

export default FriendListItem