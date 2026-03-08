import NavBar1 from "../components/NavBar1";
import Hero from "../components/Hero";
import SellerCardOne from "../components/SellerCardOne";
import styles from "./LocalSellerspashmina.module.css";

const LocalSellerspashmina = () => {
  return (
    <div className={styles.localSellerspashmina}>
      <NavBar1
        bEAUTYFlex="unset"
        bEAUTYMarginRight="-2px"
        bEAUTYAlignSelf="stretch"
      />
      <Hero />
      <main className={styles.productGridWrapper}>
        <section className={styles.productGrid}>
          <SellerCardOne />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.findTheSellersFromKashmirParent}>
                <h1
                  className={styles.findTheSellers}
                >{`Find the sellers from Kashmir `}</h1>
                <div className={styles.price}>
                  <div className={styles.shop1Parent}>
                    <img
                      className={styles.shop1Icon}
                      loading="lazy"
                      alt=""
                      src="/shop1@2x.png"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.frameWrapper1}>
                            <div className={styles.pashminaStoreParent}>
                              <h2 className={styles.pashminaStore}>
                                Pashmina Store
                              </h2>
                              <div className={styles.checkOutThis}>
                                Check out this shop
                              </div>
                            </div>
                          </div>
                          <h1 className={styles.topItems}>Top Items</h1>
                        </div>
                      </div>
                      <div className={styles.materialSymbolsstarParent}>
                        <img
                          className={styles.materialSymbolsstarIcon}
                          loading="lazy"
                          alt=""
                          src="/materialsymbolsstar.svg"
                        />
                        <img
                          className={styles.materialSymbolsstarIcon1}
                          alt=""
                          src="/materialsymbolsstar.svg"
                        />
                        <img
                          className={styles.materialSymbolsstarIcon2}
                          alt=""
                          src="/materialsymbolsstar.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent1}>
                  <div className={styles.seeMoreWrapper}>
                    <h2 className={styles.seeMore}>See More</h2>
                  </div>
                  <div className={styles.shopButtonOne}>
                    <img
                      className={styles.shop3Icon}
                      loading="lazy"
                      alt=""
                      src="/shop3@2x.png"
                    />
                    <div className={styles.frameParent2}>
                      <div className={styles.pashminaHutParent}>
                        <h2 className={styles.pashminaHut}>Pashmina Hut</h2>
                        <div className={styles.checkOutThisShopWrapper}>
                          <div className={styles.checkOutThis1}>
                            Check out this shop
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent3}>
                        <div className={styles.frameWrapper3}>
                          <div className={styles.materialSymbolsstarGroup}>
                            <img
                              className={styles.materialSymbolsstarIcon3}
                              alt=""
                              src="/materialsymbolsstar.svg"
                            />
                            <img
                              className={styles.materialSymbolsstarIcon4}
                              alt=""
                              src="/materialsymbolsstar.svg"
                            />
                            <img
                              className={styles.materialSymbolsstarIcon5}
                              alt=""
                              src="/materialsymbolsstar.svg"
                            />
                          </div>
                        </div>
                        <h2 className={styles.seeMore1}>See More</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.placeholderGridWrapper}>
              <div className={styles.placeholderGrid}>
                <div className={styles.sellerDetailsTwo}>
                  <img className={styles.k3Icon} alt="" src="/k3@2x.png" />
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameParent4}>
                      <div className={styles.wrapper}>
                        <div className={styles.div}>4.2</div>
                      </div>
                      <div className={styles.materialSymbolsstarWrapper}>
                        <img
                          className={styles.materialSymbolsstarIcon6}
                          alt=""
                          src="/materialsymbolsstar-6.svg"
                        />
                      </div>
                      <div className={styles.frameItem} />
                    </div>
                    <div className={styles.kWrapper}>
                      <div className={styles.k}>5.7k</div>
                    </div>
                  </div>
                </div>
                <div className={styles.topItemContentOne}>
                  <img className={styles.k2Icon} alt="" src="/k2@2x.png" />
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameInner} />
                    <div className={styles.frameParent5}>
                      <div className={styles.container}>
                        <div className={styles.div1}>4.2</div>
                      </div>
                      <div className={styles.materialSymbolsstarContainer}>
                        <img
                          className={styles.materialSymbolsstarIcon7}
                          alt=""
                          src="/materialsymbolsstar-6.svg"
                        />
                        <div className={styles.lineDiv} />
                      </div>
                    </div>
                    <div className={styles.kContainer}>
                      <div className={styles.k1}>5.7k</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.k3Icon1}
                  loading="lazy"
                  alt=""
                  src="/k3@2x.png"
                />
              </div>
            </div>
            <div className={styles.ladhakContentWrapper}>
              <div className={styles.ladhakContent}>
                <h2 className={styles.ladhakShawls}>Ladhak Shawls</h2>
                <div className={styles.orangePurePashmina}>
                  Orange pure Pashmina Shawls
                </div>
                <div className={styles.rs2000}>Rs. 2000</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LocalSellerspashmina;
