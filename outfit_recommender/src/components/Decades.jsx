import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Decades.module.css";

const Decades = ({ className = "", s1, s, propTop, propLeft }) => {
  const decadesStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={[styles.decades, className].join(" ")} style={decadesStyle}>
      <div className={styles.decadesChild} />
      <img className={styles.s1Icon} loading="lazy" alt="" src={s1} />
      <div className={styles.sFashion}>
        <p className={styles.s}>{s}</p>
        <p className={styles.fashion}>Fashion</p>
      </div>
    </div>
  );
};

Decades.propTypes = {
  className: PropTypes.string,
  s1: PropTypes.string,
  s: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Decades;
