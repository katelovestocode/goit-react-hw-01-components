import PropTypes from 'prop-types';
import css from "../Profile/Profile.module.css"
import {Container, Description, List, ListItem, SpanText, SpanNumber, Text, Image} from "components/Profile/Profile.styled"

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
    <Container>
    <Description>
    <Image
      src={avatar}
      alt={tag}
    />
    <Text>{username}</Text>
    <Text>@{tag}</Text>
    <Text>{location}</Text>
  </Description>

  <List>
    <ListItem>
      <SpanText>Followers</SpanText>
      <SpanNumber>{followers}</SpanNumber>
    </ListItem>
    <ListItem>
      <SpanText>Views</SpanText>
      <SpanNumber>{views}</SpanNumber>
    </ListItem>
    <ListItem>
      <SpanText>Likes</SpanText>
      <SpanNumber>{likes}</SpanNumber>
    </ListItem>
  </List>
</Container>)}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
      })}

