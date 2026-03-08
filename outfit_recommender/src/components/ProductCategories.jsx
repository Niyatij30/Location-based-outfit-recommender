import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ProductCategories.module.css";

const ProductCategories = ({
  className = "",
  phulkariPic,
  findAuthenticPhulkariDupp,
  propBackgroundImage,
}) => {
  const productCategoriesStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className={[styles.productCategories, className].join(" ")}
      style={productCategoriesStyle}
    >
      <img className={styles.phulkariPicIcon} alt="" src={phulkariPic} />
      <div className={styles.productCards}>
        <div className={styles.productCardsChild} />
        <div className={styles.findAuthenticPhulkari}>
          {findAuthenticPhulkariDupp}
        </div>
      </div>
    </div>
  );
};

ProductCategories.propTypes = {
  className: PropTypes.string,
  phulkariPic: PropTypes.string,
  findAuthenticPhulkariDupp: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default ProductCategories;
