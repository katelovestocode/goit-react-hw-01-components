import PropTypes from 'prop-types';
import css from "../TransactionHistory/TransactionHistory.module.css"
import {Table, Body, Head} from "components/TransactionHistory/TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    return (<Table>
  <Head>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Head>
    <Body>
    {items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  )) }
    </Body>
  </Table>)}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}