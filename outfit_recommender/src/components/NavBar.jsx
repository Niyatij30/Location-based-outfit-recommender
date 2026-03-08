import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";

const NavBar = ({ className = "", rectangleDivMarginRight }) => {
  const navBar1Style = useMemo(() => {
    return {
      marginRight: rectangleDivMarginRight,
    };
  }, [rectangleDivMarginRight]);

  const navigate = useNavigate();

  const onPEHNAVATextClick = useCallback(() => {
    navigate("/pehnava-page-1");
  }, [navigate]);

  return (
    <header
      className={[styles.navBar, className].join(" ")}
      style={navBar1Style}
    >
      <div className={styles.navBarChild} />
      <img
        className={styles.logo1Icon}
        loading="lazy"
        alt=""
        src="/logo-1@2x.png"
      />
      <div className={styles.men}>MEN</div>
      <div className={styles.newPromotions}>
        <div className={styles.newContainer}>
          <div className={styles.new}>NEW</div>
        </div>
        <div className={styles.brandContainer}>
          <a className={styles.pehnava} onClick={onPEHNAVATextClick}>
            PEHNAVA
          </a>
        </div>
      </div>
      <a className={styles.beauty}>BEAUTY</a>
      <a className={styles.homeLiving}>{`HOME & LIVING`}</a>
      <a className={styles.kids}>KIDS</a>
      <a className={styles.women}>WOMEN</a>
      <div className={styles.search}>
        <div className={styles.searchChild} />
        <div className={styles.searchBar}>
          <img className={styles.search1Icon} alt="" src="/search-1@2x.png" />
          <input
            className={styles.searchForProducts}
            placeholder="Search for products, brands and more"
            type="text"
          />
        </div>
      </div>
      <img
        className={styles.logo21Icon}
        loading="lazy"
        alt=""
        src="/logo2-1@2x.png"
      />
    </header>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  rectangleDivMarginRight: PropTypes.any,
};

export default NavBar;
