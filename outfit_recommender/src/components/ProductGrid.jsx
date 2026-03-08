import ProductDetails from "./ProductDetails";
import PropTypes from "prop-types";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({ className = "" }) => {
  return (
    <div className={[styles.productGrid, className].join(" ")}>
      <div className={styles.productRow}>
        <ProductDetails k4="/k4@2x.png" />
        <ProductDetails k4="/k8@2x.png" propHeight="487px" propGap="44px" />
        <ProductDetails k4="/k7@2x.png" propHeight="487px" propGap="44px" />
      </div>
      <div className={styles.productRow1}>
        <ProductDetails k4="/k6@2x.png" propHeight="547px" propGap="104px" />
        <ProductDetails k4="/k5@2x.png" propHeight="547px" propGap="104px" />
        <ProductDetails k4="/k101@2x.png" propHeight="547px" propGap="104px" />
      </div>
      <div className={styles.productsRow}>
        <div className={styles.productTriple}>
          <div className={styles.jaipurPrints}>Jaipur Prints</div>
          <div className={styles.greenWorkSuit}>Green Work Suit Piece</div>
          <div className={styles.rs2000}>Rs. 2000</div>
        </div>
        <div className={styles.productTriple1}>
          <div className={styles.jaipurPrints1}>Jaipur Prints</div>
          <div className={styles.greenWorkSuit1}>Green Work Suit Piece</div>
          <div className={styles.rs20001}>Rs. 2000</div>
        </div>
        <div className={styles.productTriple2}>
          <div className={styles.jaipurPrints2}>Jaipur Prints</div>
          <div className={styles.greenWorkSuit2}>Green Work Suit Piece</div>
          <div className={styles.rs20002}>Rs. 2000</div>
        </div>
      </div>
    </div>
  );
};

ProductGrid.propTypes = {
  className: PropTypes.string,
};

export default ProductGrid;
