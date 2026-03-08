import NavBar from "../components/NavBar";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <NavBar />
      <img
        className={styles.screenshot20240709At113}
        alt=""
        src="/screenshot-20240709-at-11321pm-1@2x.png"
      />
    </div>
  );
};

export default HomePage;
