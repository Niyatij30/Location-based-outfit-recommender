import PropTypes from "prop-types";
import styles from "./BannerAndSurvey.module.css";

const BannerAndSurvey = ({
  className = "",
  materialSymbolsfeaturedSe,
  attemptThisWeeksCustomerS,
  clickHere,
}) => {
  return (
    <div className={[styles.bannerAndSurvey, className].join(" ")}>
      <div className={styles.bannerAndSurveyChild} />
      <div className={styles.banners}>
        <img
          className={styles.materialSymbolsfeaturedSeasIcon}
          loading="lazy"
          alt=""
          src={materialSymbolsfeaturedSe}
        />
      </div>
      <div className={styles.survey}>
        <div className={styles.attemptThisWeeks}>
          {attemptThisWeeksCustomerS}
        </div>
      </div>
      <button className={styles.clickHere}>
        <div className={styles.clickHereChild} />
        <div className={styles.clickHere1}>{clickHere}</div>
      </button>
    </div>
  );
};

BannerAndSurvey.propTypes = {
  className: PropTypes.string,
  materialSymbolsfeaturedSe: PropTypes.string,
  attemptThisWeeksCustomerS: PropTypes.string,
  clickHere: PropTypes.string,
};

export default BannerAndSurvey;
