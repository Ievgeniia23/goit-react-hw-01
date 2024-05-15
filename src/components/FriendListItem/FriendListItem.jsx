


const FriendListItem = (avatar, name, isOnline) => {
  return (

<div>
          <img
              src={avatar}
              alt="Avatar"
              width="48" />
          <p>Friend name {name}</p>
       <p>{isOnline ? `Friend status "Online"` : `Friend status "Offline"`}</p>
</div>
  
  )

}

export default FriendListItem