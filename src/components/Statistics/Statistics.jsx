import PropTypes from 'prop-types';
import css from "../Statistics/Statistics.module.css"
import {Container, Title, List, ListItem, Label, Percentage} from "../Statistics/Statistics.styled"
import { Box } from '../Box';

export const Statistics = ({title, stats}) => {
    return (
  <Box display="flex" alignItems='center'  justifyContent="center"  flexDirection='column' p={4} as="section">
            {{title} && <Title> {title} </Title>}
        <List>
                
        {stats.map(({ id, label, percentage }) => (
             <ListItem key={id}>
             <Label>{label}</Label>
             <Percentage>{percentage}%</Percentage>
            </ListItem>
                ))}
        </List>
   </Box>
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