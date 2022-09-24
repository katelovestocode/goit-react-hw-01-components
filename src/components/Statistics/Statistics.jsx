import PropTypes from 'prop-types';
import css from "../Statistics/Statistics.module.css"
import {Container, Title, List, ListItem, Label, Percentage} from "../Statistics/Statistics.styled"


export const Statistics = ({title, stats}) => {
    return (
  <Container>
            {{title} && <Title> {title} </Title>}
        <List>
                
        {stats.map(({ id, label, percentage }) => (
             <ListItem key={id}>
             <Label>{label}</Label>
             <Percentage>{percentage}%</Percentage>
            </ListItem>
                ))}
        </List>
   </Container>
)}


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }))
};