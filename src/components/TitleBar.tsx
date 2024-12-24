import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import styles from "./TitleBar.module.css";

export default function TitleBar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.title}>Where in the world?</div>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faMoon} />
        <div className={styles.text}>Dark Mode</div>
      </button>
    </nav>
  );
}
