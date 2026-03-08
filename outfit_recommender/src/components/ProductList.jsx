import ProductDetails1 from "./ProductDetails1";
import PropTypes from "prop-types";
import styles from "./ProductList.module.css";

const ProductList = ({ className = "" }) => {
  return (
    <section className={[styles.productList, className].join(" ")}>
      <div className={styles.productRow}>
        <div className={styles.footerParent}>
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <div className={styles.footerCategories}>
                <div className={styles.categoryLinks}>
                  <div className={styles.rectangleParent}>
                    <input
                      className={styles.frameChild}
                      type="radio"
                      name="radioGroup-1"
                    />
                    <div className={styles.men}>Men</div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.rectangleWrapper}>
                      <input
                        className={styles.frameItem}
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className={styles.women}>Women</div>
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.rectangleContainer}>
                      <input
                        className={styles.frameInner}
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className={styles.kids}>Kids</div>
                  </div>
                </div>
              </div>
              <div className={styles.lineParent}>
                <div className={styles.lineDiv} />
                <div className={styles.brandSearch}>
                  <div className={styles.searchInputContainer}>
                    <div className={styles.searchField}>
                      <div className={styles.brands}>BRANDS</div>
                    </div>
                    <img
                      className={styles.search2Icon}
                      loading="lazy"
                      alt=""
                      src="/search-2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.featuredBrand}>
                  <div className={styles.brandHighlight}>
                    <input
                      className={styles.brandIconPlaceholder}
                      type="checkbox"
                    />
                    <div className={styles.brandNameContainer}>
                      <div className={styles.pashminaTextiles}>
                        Pashmina Textiles
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.brandList}>
                  <div className={styles.brandTiles}>
                    <input className={styles.brandIcons} type="checkbox" />
                    <div className={styles.kashmiriArts}>Kashmiri Arts</div>
                  </div>
                </div>
                <div className={styles.brandList1}>
                  <div className={styles.rectangleGroup}>
                    <input className={styles.rectangleInput} type="checkbox" />
                    <div className={styles.xyzBrand}>XYZ Brand</div>
                  </div>
                </div>
                <div className={styles.brandList2}>
                  <div className={styles.frameDiv}>
                    <input className={styles.rectangleInput1} type="checkbox" />
                    <div className={styles.xyzBrand1}>XYZ Brand</div>
                  </div>
                </div>
                <div className={styles.brandList3}>
                  <div className={styles.rectangleParent1}>
                    <input className={styles.rectangleInput2} type="checkbox" />
                    <div className={styles.xyzBrand2}>XYZ Brand</div>
                  </div>
                </div>
                <div className={styles.brandList4}>
                  <div className={styles.rectangleParent2}>
                    <input className={styles.rectangleInput3} type="checkbox" />
                    <div className={styles.xyzBrand3}>XYZ Brand</div>
                  </div>
                </div>
                <div className={styles.brandList5}>
                  <div className={styles.rectangleParent3}>
                    <input className={styles.rectangleInput4} type="checkbox" />
                    <div className={styles.xyzBrand4}>XYZ Brand</div>
                  </div>
                </div>
              </div>
              <div className={styles.lineGroup}>
                <div className={styles.frameChild1} />
                <div className={styles.priceFilter}>
                  <div className={styles.price}>{`PRICE `}</div>
                </div>
              </div>
              <div className={styles.priceRange}>
                <div className={styles.priceInput}>
                  <div className={styles.priceSlider}>
                    <input className={styles.priceRangeInput} type="checkbox" />
                    <div className={styles.rs186To}>Rs. 186 to Rs. 75140</div>
                  </div>
                  <div className={styles.priceRangeOptions}>
                    <div className={styles.customPriceRange}>
                      <input
                        className={styles.customRangeInput}
                        type="checkbox"
                      />
                      <div className={styles.customRangeLabel}>
                        <div className={styles.rs75140To}>
                          Rs. 75140 to Rs. 150094
                        </div>
                      </div>
                    </div>
                    <div className={styles.priceOption}>
                      <input className={styles.rangeSelector} type="checkbox" />
                      <div className={styles.rs150094To}>
                        Rs. 150094 to Rs. 225048
                      </div>
                    </div>
                    <div className={styles.priceOption1}>
                      <input
                        className={styles.rectangleInput5}
                        type="checkbox"
                      />
                      <div className={styles.rs225048To}>
                        Rs. 225048 to Rs. 300002
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.discountSeparator}>
                <div className={styles.discountSeparatorChild} />
              </div>
              <div className={styles.discountContainer}>
                <div className={styles.discountHeader}>
                  <div className={styles.discountRange}>DISCOUNT RANGE</div>
                  <div className={styles.discountOptions}>
                    <div className={styles.discountRangeRowParent}>
                      <div className={styles.discountRangeRow}>
                        <input className={styles.rangeButton} type="checkbox" />
                        <div className={styles.rangeLabelContainer}>
                          <div className={styles.andAbove}>10% and above</div>
                        </div>
                      </div>
                      <div className={styles.discountRangeRow1}>
                        <input
                          className={styles.rectangleInput6}
                          type="checkbox"
                        />
                        <div className={styles.andAboveWrapper}>
                          <div className={styles.andAbove1}>20% and above</div>
                        </div>
                      </div>
                      <div className={styles.discountRangeRow2}>
                        <input
                          className={styles.rectangleInput7}
                          type="checkbox"
                        />
                        <div className={styles.andAbove2}>30% and above</div>
                      </div>
                      <div className={styles.discountRangeRow3}>
                        <input
                          className={styles.rectangleInput8}
                          type="checkbox"
                        />
                        <div className={styles.andAboveContainer}>
                          <div className={styles.andAbove3}>40% and above</div>
                        </div>
                      </div>
                      <div className={styles.discountRangeRow4}>
                        <input
                          className={styles.rectangleInput9}
                          type="checkbox"
                        />
                        <div className={styles.andAboveFrame}>
                          <div className={styles.andAbove4}>50% and above</div>
                        </div>
                      </div>
                      <div className={styles.discountRangeRow5}>
                        <div className={styles.rangeButton1}>
                          <input
                            className={styles.rangeLabelContainer1}
                            type="checkbox"
                          />
                          <div className={styles.rangeValue}>
                            <div className={styles.andAbove5}>
                              60% and above
                            </div>
                          </div>
                        </div>
                        <div className={styles.rangeButton2}>
                          <input
                            className={styles.rectangleInput10}
                            type="checkbox"
                          />
                          <div className={styles.andAboveWrapper1}>
                            <div className={styles.andAbove6}>
                              70% and above
                            </div>
                          </div>
                        </div>
                        <div className={styles.rangeButton3}>
                          <input
                            className={styles.rectangleInput11}
                            type="checkbox"
                          />
                          <div className={styles.andAboveWrapper2}>
                            <div className={styles.andAbove7}>
                              80% and above
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.colorSeparator}>
                <div className={styles.colorSeparatorChild} />
                <div className={styles.colorContainer}>
                  <div className={styles.colorOptions}>
                    <div className={styles.colorSearch}>
                      <div className={styles.color}>COLOR</div>
                      <img
                        className={styles.search3Icon}
                        loading="lazy"
                        alt=""
                        src="/search-2@2x.png"
                      />
                    </div>
                    <div className={styles.colorSwatch}>
                      <div className={styles.colorInput}>
                        <div className={styles.colorIndicator} />
                        <div className={styles.white}>White</div>
                      </div>
                    </div>
                    <div className={styles.colorSwatch1}>
                      <div className={styles.colorInput1}>
                        <div className={styles.colorIndicator1}>
                          <div className={styles.colorName} />
                        </div>
                        <div className={styles.black}>Black</div>
                      </div>
                    </div>
                    <div className={styles.colorSwatch2}>
                      <div className={styles.colorInput2}>
                        <div className={styles.colorIndicator2} />
                        <div className={styles.red}>Red</div>
                      </div>
                    </div>
                    <div className={styles.colorSwatch3}>
                      <div className={styles.rectangleParent4}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.yellow}>Yellow</div>
                      </div>
                    </div>
                    <div className={styles.colorSwatch4}>
                      <div className={styles.colorInput3}>
                        <div className={styles.colorIndicator3} />
                        <div className={styles.blue}>Blue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.separator} />
            </div>
            <div className={styles.productRow1}>
              <div className={styles.divider} />
            </div>
          </div>
          <div className={styles.productTile}>
            <div className={styles.productInfo}>
              <ProductDetails1 k6="/k6@2x.png" />
              <ProductDetails1
                k6="/k4@2x.png"
                propHeight="unset"
                propFlex="1"
                propPadding="0px 0px 7px"
              />
              <img className={styles.k6Icon} alt="" src="/k6@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.productRowInner}>
          <div className={styles.frameContainer}>
            <ProductDetails1
              k6="/k5@2x.png"
              propHeight="452px"
              propFlex="unset"
              propPadding="unset"
            />
            <ProductDetails1
              k6="/k7@2x.png"
              propHeight="unset"
              propFlex="1"
              propPadding="0px 0px 7px"
            />
            <img className={styles.k5Icon} alt="" src="/k5@2x.png" />
          </div>
        </div>
        <div className={styles.productRowChild}>
          <div className={styles.frameParent1}>
            <ProductDetails1
              k6="/k101@2x.png"
              propHeight="452px"
              propFlex="unset"
              propPadding="unset"
            />
            <ProductDetails1
              k6="/k8@2x.png"
              propHeight="unset"
              propFlex="1"
              propPadding="0px 0px 7px"
            />
            <img className={styles.k10Icon} alt="" src="/k101@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.productListChild} />
    </section>
  );
};

ProductList.propTypes = {
  className: PropTypes.string,
};

export default ProductList;
