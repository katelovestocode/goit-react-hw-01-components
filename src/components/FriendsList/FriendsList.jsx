import css from "../FriendsList/FriendsList.module.css";
import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem"


export const FriendList = ({ friends }) => {
    return (<ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (<FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />))}
        
</ul>)}

FriendList.propType = {
    friends: PropTypes.arrayOf(PropTypes.exact({isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired})
  )}