import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

const Statistics = ({ statisticalData, title }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.stat_list}>
      {statisticalData.map((statistic) => (
        <li
          className={styles.item}
          style={{ backgroundColor: randColor() }}
          key={statistic.id}
        >
          <span className={styles.label}>{statistic.label}</span>
          <span className={styles.percentage}>{statistic.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  statisticalData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

export default Statistics;
