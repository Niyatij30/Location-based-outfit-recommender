import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./NavBar1.module.css";

const NavBar1 = ({
  className = "",
  bEAUTYFlex,
  bEAUTYMarginRight,
  bEAUTYAlignSelf,
}) => {
  const navBarStyle = useMemo(() => {
    return {
      flex: bEAUTYFlex,
      marginRight: bEAUTYMarginRight,
      alignSelf: bEAUTYAlignSelf,
    };
  }, [bEAUTYFlex, bEAUTYMarginRight, bEAUTYAlignSelf]);

  return (
    <div className={[styles.navBar, className].join(" ")} style={navBarStyle}>
      <div className={styles.navBarChild} />
      <img
        className={styles.logo1Icon}
        loading="lazy"
        alt=""
        src="/logo-1@2x.png"
      />
      <div className={styles.men}>MEN</div>
      <div className={styles.searchNewPehnava}>
        <div className={styles.new}>
          <a className={styles.new1}>NEW</a>
        </div>
        <div className={styles.pehnava}>
          <a className={styles.pehnava1}>PEHNAVA</a>
        </div>
      </div>
      <a className={styles.beauty}>BEAUTY</a>
      <a className={styles.homeLiving}>{`HOME & LIVING`}</a>
      <a className={styles.kids}>KIDS</a>
      <a className={styles.women}>WOMEN</a>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.search}>
          <img className={styles.search1Icon} alt="" src="/search-1@2x.png" />
          <div className={styles.searchForProducts}>
            Search for products, brands and more
          </div>
        </div>
      </div>
      <img
        className={styles.logo21Icon}
        loading="lazy"
        alt=""
        src="/logo2-1@2x.png"
      />
    </div>
  );
};

NavBar1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  bEAUTYFlex: PropTypes.any,
  bEAUTYMarginRight: PropTypes.any,
  bEAUTYAlignSelf: PropTypes.any,
};

export default NavBar1;
