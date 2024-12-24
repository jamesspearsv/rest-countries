import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import styles from "./TitleBar.module.css";

type TitleBarProps = {
  colorMode: "light" | "dark";
  setColorMode: (mode: "light" | "dark") => void;
};

export default function TitleBar({ colorMode, setColorMode }: TitleBarProps) {
  function handleColorModeChange() {
    if (colorMode === "light") {
      setColorMode("dark");
    }

    if (colorMode === "dark") {
      setColorMode("light");
    }
  }

  return (
    <nav className={styles.navContainer}>
      <div className={styles.title}>Where in the world?</div>

      <button className={styles.button} onClick={handleColorModeChange}>
        <FontAwesomeIcon icon={colorMode === "light" ? faMoon : faSun} />
        <div className={styles.text}>
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </div>
      </button>
    </nav>
  );
}
