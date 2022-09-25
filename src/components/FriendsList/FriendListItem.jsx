import css from "../FriendsList/FriendsList.module.css";
import PropTypes from "prop-types";
import { Span, ListItem, Name, Image } from "components/FriendsList/Friends.styled"





export const FriendListItem = ({ isOnline, name, id, avatar }) => {
    return (<ListItem key={id}>
            <Span status={isOnline}>{isOnline}</Span>
            <Image src={avatar} alt={name}  />
            <Name>{name}</Name>
        </ListItem>)
    
}

FriendListItem.propType = {
    
  status: PropTypes.bool.isRequired}