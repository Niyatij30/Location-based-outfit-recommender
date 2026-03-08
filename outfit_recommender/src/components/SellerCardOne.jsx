import PropTypes from "prop-types";
import styles from "./SellerCardOne.module.css";

const SellerCardOne = ({ className = "" }) => {
  return (
    <div className={[styles.sellerCardOne, className].join(" ")}>
      <img className={styles.k9Icon} loading="lazy" alt="" src="/k9@2x.png" />
      <div className={styles.sellerDetailsThree}>
        <img
          className={styles.k10Icon}
          loading="lazy"
          alt=""
          src="/k10@2x.png"
        />
        <div className={styles.sellerNameRating}>
          <img
            className={styles.k12Icon}
            loading="lazy"
            alt=""
            src="/k12@2x.png"
          />
        </div>
      </div>
      <div className={styles.shopDescriptionTwo}>
        <div className={styles.seeMoreButton}>
          <div className={styles.sellerShopLinkParent}>
            <div className={styles.sellerShopLink}>
              <h1 className={styles.pashmina}>{`PASHMINA `}</h1>
            </div>
            <h1 className={styles.pashmina1}>{`PASHMINA `}</h1>
          </div>
          <h3 className={styles.pashminaKnownFor}>
            Pashmina, known for its exquisite softness and warmth, is a hallmark
            of Kashmiri craftsmanship. Handwoven from the fine wool of Himalayan
            goats, these luxurious shawls have been cherished for centuries,
            symbolising the rich cultural heritage. Renowned worldwide, Kashmiri
            Made from the finest fibres of Himalayan goats, these shawls are
            meticulously handcrafted by local artisans, reflecting the rich
            traditions and exceptional craftsmanship unique to the Kashmir
            region.
          </h3>
        </div>
      </div>
    </div>
  );
};

SellerCardOne.propTypes = {
  className: PropTypes.string,
};

export default SellerCardOne;
