import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "./TitleBar.module.css";
import { Link } from "react-router";

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
      <Link to={"/"} className={styles.title}>
        Where in the world?
      </Link>

      <button className={styles.button} onClick={handleColorModeChange}>
        <FontAwesomeIcon
          icon={colorMode === "light" ? faMoon : faSun}
          className={styles.icon}
        />
        <div className={styles.text}>
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </div>
      </button>
    </nav>
  );
}
