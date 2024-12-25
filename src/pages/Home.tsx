import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";
import CountriesGrid from "../components/CountriesGrid.tsx";
import { useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.actionBar}>
        <div className={styles.searchBox}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>todo...</div>
      </div>
      <CountriesGrid searchTerm={searchTerm} />
    </div>
  );
}
