import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavBar2.module.css";

const NavBar2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onPEHNAVATextClick = useCallback(() => {
    navigate("/pehnava-page-1");
  }, [navigate]);

  return (
    <header className={[styles.navBar, className].join(" ")}>
      <div className={styles.navBarChild} />
      <img
        className={styles.logo1Icon}
        loading="lazy"
        alt=""
        src="/logo-1@2x.png"
      />
      <div className={styles.men}>MEN</div>
      <div className={styles.frameParent}>
        <div className={styles.newWrapper}>
          <div className={styles.new}>NEW</div>
        </div>
        <div className={styles.pehnavaWrapper}>
          <a className={styles.pehnava} onClick={onPEHNAVATextClick}>
            PEHNAVA
          </a>
        </div>
      </div>
      <a className={styles.beauty}>BEAUTY</a>
      <a className={styles.homeLiving}>{`HOME & LIVING`}</a>
      <a className={styles.kids}>KIDS</a>
      <a className={styles.women}>WOMEN</a>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.search1Parent}>
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

NavBar2.propTypes = {
  className: PropTypes.string,
};

export default NavBar2;
