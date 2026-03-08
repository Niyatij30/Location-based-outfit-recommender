import NavBar from "../components/NavBar";
import FrameComponent3 from "../components/FrameComponent3";
import ProductListing from "../components/ProductListing";
import ProductList from "../components/ProductList";
import ProductGrid from "../components/ProductGrid";
import styles from "./LocationPagesrinagar.module.css";

const LocationPagesrinagar = () => {
  return (
    <div className={styles.locationPagesrinagar}>
      <NavBar rectangleDivMarginRight="-2px" />
      <FrameComponent3 />
      <ProductListing />
      <ProductList />
      <section className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.ratingFilter}>
            <div className={styles.starSelector}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.separator}>4.2</div>
                <img
                  className={styles.materialSymbolsstarIcon}
                  alt=""
                  src="/materialsymbolsstar1.svg"
                />
                <div className={styles.ratingCount}>
                  <div className={styles.ratingCountChild} />
                  <div className={styles.k}>5.7k</div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.div}>4.2</div>
                <img
                  className={styles.materialSymbolsstarIcon1}
                  alt=""
                  src="/materialsymbolsstar1.svg"
                />
                <div className={styles.lineParent}>
                  <div className={styles.frameInner} />
                  <div className={styles.k1}>5.7k</div>
                </div>
              </div>
              <div className={styles.ratingOption}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.separator1}>4.2</div>
                  <img
                    className={styles.materialSymbolsstarIcon2}
                    alt=""
                    src="/materialsymbolsstar1.svg"
                  />
                  <div className={styles.ratingCount1}>
                    <div className={styles.ratingCountItem} />
                    <div className={styles.k2}>5.7k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductGrid />
        </div>
      </section>
    </div>
  );
};

export default LocationPagesrinagar;
