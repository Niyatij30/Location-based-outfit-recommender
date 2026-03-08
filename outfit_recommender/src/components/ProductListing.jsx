import PropTypes from "prop-types";
import styles from "./ProductListing.module.css";

const ProductListing = ({ className = "" }) => {
  return (
    <section className={[styles.productListing, className].join(" ")}>
      <div className={styles.listingHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.productCount}>
            <div className={styles.srinagarTrendsContainer}>
              <span
                className={styles.srinagarTrends}
              >{`Srinagar Trends `}</span>
              <span className={styles.items}>- 1287 items</span>
            </div>
            <div className={styles.filtersParent}>
              <div className={styles.filters}>FILTERS</div>
              <div className={styles.clearFilter}>
                <div className={styles.clearAll}>CLEAR ALL</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.sortBy}>Sort by:</div>
          <div className={styles.recommended}>Recommended</div>
          <img
            className={styles.simpleLineIconsarrowUp}
            alt=""
            src="/simplelineiconsarrowup1.svg"
          />
        </div>
      </div>
    </section>
  );
};

ProductListing.propTypes = {
  className: PropTypes.string,
};

export default ProductListing;
