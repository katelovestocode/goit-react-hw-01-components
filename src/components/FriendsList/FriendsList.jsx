import css from "../FriendsList/FriendsList.module.css";
import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem"
// import { List } from "../FriendsList/Friends.styled"
import { Box } from '../Box';


export const FriendList = ({ friends }) => {
    return (
        <Box display="flex" p={4} as="ul" border="normal" borderColor="ivory">
            {friends.map(({ id, avatar, name, isOnline }) => (<FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />))}</Box>)
}

FriendList.propType = {
    friends: PropTypes.arrayOf(PropTypes.exact({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired})
  )}