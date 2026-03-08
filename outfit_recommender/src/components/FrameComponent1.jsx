import NavBar1 from "./NavBar1";
import BannerAndSurvey from "./BannerAndSurvey";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.navBarWrapper}>
        <NavBar1 />
      </div>
      <BannerAndSurvey
        materialSymbolsfeaturedSe="/materialsymbolsfeaturedseasonalandgiftsrounded.svg"
        attemptThisWeeksCustomerS="Attempt this week’s Customer Survey and win reward points!!!"
        clickHere="Click Here"
      />
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
