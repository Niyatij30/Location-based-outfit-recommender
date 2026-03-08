import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ className = "", k4, propHeight, propGap }) => {
  const productDetails1Style = useMemo(() => {
    return {
      height: propHeight,
      gap: propGap,
    };
  }, [propHeight, propGap]);

  return (
    <div
      className={[styles.productDetails, className].join(" ")}
      style={productDetails1Style}
    >
      <div className={styles.productInfo}>
        <div className={styles.jaipurPrints}>Jaipur Prints</div>
        <div className={styles.greenWorkSuit}>Green Work Suit Piece</div>
        <div className={styles.rs2000}>Rs. 2000</div>
      </div>
      <div className={styles.rating}>
        <img className={styles.k4Icon} alt="" src={k4} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.separator}>4.2</div>
          <img
            className={styles.materialSymbolsstarIcon}
            alt=""
            src="/materialsymbolsstar1.svg"
          />
          <div className={styles.ratingCount}>
            <div className={styles.ratingCountChild} />
            <div className={styles.k}>5.7k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  className: PropTypes.string,
  k4: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propGap: PropTypes.any,
};

export default ProductDetails;
