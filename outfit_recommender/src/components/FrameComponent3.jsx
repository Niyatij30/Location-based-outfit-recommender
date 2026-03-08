import BannerAndSurvey from "./BannerAndSurvey";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.heroContentParent, className].join(" ")}>
      <BannerAndSurvey
        materialSymbolsfeaturedSe="/notov1fireworks.svg"
        attemptThisWeeksCustomerS="Shop from the local sellers of Srinagar and be a part of the Shikara festival"
        clickHere="Explore"
      />
      <div className={styles.fashionBanner}>
        <div className={styles.bannerContent}>
          <div className={styles.wrapperFireflyGenerateAnIm}>
            <img
              className={styles.fireflyGenerateAnImageFor}
              loading="lazy"
              alt=""
              src="/firefly-generate-an-image-for-putting-it-at-the-top-of-a-web-page-which-shows-the-fashion-trends-and-1@2x.png"
            />
          </div>
          <h1 className={styles.srinagarFashionTrends}>
            SRINAGAR FASHION TRENDS
          </h1>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
