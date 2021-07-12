import React from "react";
import PropTypes from "prop-types";

import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.transaction_history}>
    <thead className={styles.transaction_head}>
      <tr>
        <th className={styles.transaction_title}>Type</th>
        <th className={styles.transaction_title}>Amount</th>
        <th className={styles.transaction_title}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td className={styles.transaction_item}>{item.type}</td>
          <td className={styles.transaction_item}>{item.amount}</td>
          <td className={styles.transaction_item}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
