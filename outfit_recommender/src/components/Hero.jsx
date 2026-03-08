import PropTypes from "prop-types";
import styles from "./Hero.module.css";

const Hero = ({ className = "" }) => {
  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.heroContent}>
        <img
          className={styles.bbzuvjCsAcUf10001000Ql80Icon}
          loading="lazy"
          alt=""
          src="/51bbzuvjcs-ac-uf1000-1000-ql80-removebgpreview-1@2x.png"
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h1 className={styles.vocalForLocal}>{`“ Vocal For Local ”  `}</h1>
        <h2 className={styles.bringingAuthenticDesignsContainer}>
          <p
            className={styles.bringingAuthenticDesigns}
          >{`Bringing authentic designs and art through the `}</p>
          <p className={styles.localAndReal}>
            local and real artisans and sellers!!!
          </p>
        </h2>
      </div>
      <img
        className={styles.bbzuvjCsAcUf10001000Ql80Icon1}
        loading="lazy"
        alt=""
        src="/51bbzuvjcs-ac-uf1000-1000-ql80-removebgpreview-1@2x.png"
      />
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
