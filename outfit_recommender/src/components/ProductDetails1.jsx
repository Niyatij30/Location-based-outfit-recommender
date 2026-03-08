import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ProductDetails1.module.css";

const ProductDetails1 = ({
  className = "",
  k6,
  propHeight,
  propFlex,
  propPadding,
}) => {
  const productDetailsStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
      padding: propPadding,
    };
  }, [propHeight, propFlex, propPadding]);

  return (
    <div
      className={[styles.productDetails, className].join(" ")}
      style={productDetailsStyle}
    >
      <div className={styles.rating}>
        <img className={styles.k6Icon} alt="" src={k6} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.separator}>4.2</div>
          <img
            className={styles.materialSymbolsstarIcon}
            loading="lazy"
            alt=""
            src="/materialsymbolsstar1.svg"
          />
          <div className={styles.ratingCount}>
            <div className={styles.ratingCountChild} />
            <div className={styles.k}>5.7k</div>
          </div>
        </div>
      </div>
      <div className={styles.jaipurPrints}>Jaipur Prints</div>
      <div className={styles.greenWorkSuit}>Green Work Suit Piece</div>
      <div className={styles.rs2000}>Rs. 2000</div>
    </div>
  );
};

ProductDetails1.propTypes = {
  className: PropTypes.string,
  k6: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
};

export default ProductDetails1;
