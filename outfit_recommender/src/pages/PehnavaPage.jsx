import FrameComponent1 from "../components/FrameComponent1";
import Decades from "../components/Decades";
import FrameComponent from "../components/FrameComponent";
import styles from "./PehnavaPage.module.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const PehnavaPage = () => {
  const [region, setRegion] = useState("");
  const navigate = useNavigate();

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    navigate(`/region/${selectedRegion}`);
  };


  return (
    <div className={styles.pehnavaPage1}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.fashiontrends2021Small1Icon}
          loading="lazy"
          alt=""
          src="/fashiontrends2021-small-1@2x.png"
        />
        <div className={styles.exploreTrends}>
          <div className={styles.exploreTrendsChild} />
          <div className={styles.exploreNewLocation}>
            Explore New Location Fashion Trends
          </div>
        </div>
      </div>
      <FrameComponent1 />
      <main className={styles.mainContent}>
        <section className={styles.frameParent}>
          <div className={styles.pehnavaTitleParent}>
            <div className={styles.pehnavaTitle}>
              <h1 className={styles.pehnava}>PEHNAVA</h1>
            </div>
            <div className={styles.locationTrendsParent}>
              <div className={styles.locationTrends}>
                <div className={styles.locationFashion}>
                  <div className={styles.locationBanner}>
                    <div className={styles.locationImages}>
                      <div className={styles.locationBasedFashion}>
                        Location Based Fashion Trends
                      </div>
                      <div className={styles.assamParis}>
                        <div className={styles.assamParisChild} />
                        <img
                          className={styles.assamPicIcon}
                          loading="lazy"
                          alt=""
                          src="/assam-pic@2x.png"
                        />
                        <div className={styles.trendNames}>
                          <div className={styles.trendNamesChild} />
                          <div className={styles.assamFashionTrendsContainer}>
                            <p className={styles.assam}>Assam</p>
                            <p className={styles.fashionTrends}>
                              {" "}
                              Fashion Trends
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.assamParis1}>
                        <div className={styles.assamParisItem} />
                        <img
                          className={styles.parisPicIcon}
                          loading="lazy"
                          alt=""
                          src="/paris-pic@2x.png"
                        />
                        <div className={styles.rectangleGroup}>
                          <div className={styles.frameItem} />
                          <div className={styles.parisFashionTrendsContainer}>
                            <p className={styles.paris}>Paris</p>
                            <p className={styles.fashionTrends1}>
                              {" "}
                              Fashion Trends
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className={styles.selectRegion}>
                      <div className={styles.selectRegion1}>
                        <div className={styles.dropdownElements}>
                          <div className={styles.dropdownElementsChild} />
                          <div className={styles.selectRegion2}>
                            Select Region
                          </div>
                          <img
                            className={styles.simpleLineIconsarrowUp}
                            alt=""
                            src="/simplelineiconsarrowup.svg"
                          />
                        </div>
                        <div className={styles.rectangleContainer}>
                          <div className={styles.frameInner} />
                          <div className={styles.rectangleDiv} />
                          <div className={styles.frameChild1} />
                          <div className={styles.frameChild2} />
                          <div className={styles.paris1}>{`Paris `}</div>
                          <div className={styles.rajasthan}>{`Rajasthan `}</div>
                          <div className={styles.srinagar}>Srinagar</div>
                          <div className={styles.goa}>Goa</div>
                        </div>
                      </div>
                      <div className={styles.womenParent}>
                        <div className={styles.women}>Women</div>
                        <div className={styles.womenDropdown}>
                          <div className={styles.dropdownRect} />
                          <img
                            className={styles.simpleLineIconsarrowUp1}
                            alt=""
                            src="/simplelineiconsarrowup.svg"
                          />
                        </div>
                      </div>
                    </div> */}
                    <select
                      id="SelectRegion"
                      style={{ height: "100px", overflowY: "scroll" }}
                      value={region}
                      onChange={handleRegionChange}
                    >
                      <option value="">select</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="srinagar">Srinagar</option>
                      <option value="goa">Goa</option>
                      <option value="shimla">Shimla</option>
                      <option value="delhi">Delhi</option>
                    </select>
                  </div>
                </div>
                <div className={styles.erasBasedFashion}>
                  Eras Based Fashion Trends
                </div>
              </div>
              <div className={styles.erasTrends}>
                <div className={styles.erasTrendsChild} />
                <div className={styles.erasTrendsItem} />
                <div className={styles.erasTrendsInner} />
                <div className={styles.erasFashion}>
                  <div className={styles.decadeImages}>
                    <div className={styles.selectedDecade} />
                    <div className={styles.decades} />
                    <div className={styles.decades1} />
                    <div className={styles.decades2} />
                    <div className={styles.decades3} />
                    <div className={styles.decades4} />
                    <div className={styles.decades5} />
                    <div className={styles.decades6} />
                    <div className={styles.decades7} />
                    <div className={styles.decades8} />
                    <div className={styles.decades9} />
                    <div className={styles.decades10} />
                    <div className={styles.decades11} />
                    <div className={styles.decades12} />
                    <div className={styles.decades13} />
                    <div className={styles.decades14} />
                    <div className={styles.decades15} />
                    <div className={styles.decades16} />
                    <div className={styles.decades17} />
                    <div className={styles.decades18} />
                    <div className={styles.decades19} />
                    <div className={styles.decades20} />
                    <div className={styles.decades21} />
                    <div className={styles.decades22} />
                    <div className={styles.decades23} />
                    <div className={styles.decades24} />
                    <div className={styles.decades25} />
                    <div className={styles.decades26} />
                    <div className={styles.decades27} />
                    <div className={styles.decades28} />
                    <div className={styles.decades29} />
                    <div className={styles.decades30} />
                    <div className={styles.decades31} />
                    <div className={styles.decades32} />
                    <div className={styles.decades33} />
                    <div className={styles.decades34} />
                    <div className={styles.decades35} />
                    <div className={styles.decades36} />
                    <div className={styles.decades37} />
                    <div className={styles.decades38} />
                    <div className={styles.decades39} />
                    <NavLink to={`http://localhost:5173/Era/50s`}>
                      <Decades s1="/50s-1@2x.png" s="50’s " />
                    </NavLink>
                    <NavLink to={`http://localhost:5173/Era/90s`}>
                      <Decades
                        s1="/90s-1@2x.png"
                        s="90’s "
                        propTop="58px"
                        propLeft="3072px"
                      />
                    </NavLink>
                    <NavLink to={`http://localhost:5173/Era/2000s`}>
                      <Decades
                        s1="/10s-1@2x.png"
                        s="2000’s "
                        propTop="55px"
                        propLeft="3673px"
                      />
                    </NavLink>
                    <Decades
                      s1="/genz-1@2x.png"
                      s="GenZ "
                      propTop="57px"
                      propLeft="4274px"
                    />
                    <Decades
                      s1="/70s-1@2x.png"
                      s="70’s "
                      propTop="56px"
                      propLeft="1870px"
                    />
                    <Decades
                      s1="/80s-1@2x.png"
                      s="80’s "
                      propTop="59px"
                      propLeft="2471px"
                    />
                  </div>
                  <div className={styles.eightiesParent}>
                    <div className={styles.eighties}>
                      <div className={styles.eightiesImage} />
                      <img
                        className={styles.s1Icon}
                        loading="lazy"
                        alt=""
                        src="/40s-1@2x.png"
                      />
                    </div>
                    <div className={styles.sFashion}>
                      <p className={styles.s}>{`40’s `}</p>
                      <p className={styles.fashion}>Fashion</p>
                    </div>
                  </div>
                  <div className={styles.nineties}>
                    <img
                      className={styles.s1Icon1}
                      alt=""
                      src="/60s-1@2x.png"
                    />
                    <div className={styles.sFashion1}>
                      <p className={styles.s1}>{`60’s `}</p>
                      <p className={styles.fashion1}>Fashion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default PehnavaPage;
