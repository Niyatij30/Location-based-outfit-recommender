import ProductCategories from "./ProductCategories";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.sellersContentParent, className].join(" ")}>
      <div className={styles.sellersContent}>
        <div className={styles.connectWithLocal}>
          Connect With Local Sellers
        </div>
        <div className={styles.seeMore}>
          <div className={styles.seeMore1}>See More</div>
        </div>
      </div>
      <div className={styles.products}>
        <ProductCategories
          phulkariPic="/phulkari-pic@2x.png"
          findAuthenticPhulkariDupp="Find Authentic Phulkari Duppatte From the sellers of Amritsar"
        />
        <ProductCategories
          phulkariPic="/chikankari-pic@2x.png"
          findAuthenticPhulkariDupp="Get Traditional Chikankari suits directly from the artisans of Lucknow"
          propBackgroundImage="url('/chikankari-pic@2x.png')"
        />
        <ProductCategories
          phulkariPic="/pashmina-pic@2x.png"
          findAuthenticPhulkariDupp="Get your hands on the Best Pashmina shawls from Kashmir"
          propBackgroundImage="url('/pashmina-pic@2x.png')"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
