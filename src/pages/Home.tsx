import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";
import CountriesGrid from "../components/CountriesGrid.tsx";
import { useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filters = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctic",
  ];

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
        <select
          className={styles.regionFilter}
          value={selectedRegion}
          onChange={(e) => {
            setSelectedRegion(e.target.value);
          }}
        >
          <option value={""}>Filter By Region</option>
          {filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
          <div>x</div>
        </select>
      </div>
      <CountriesGrid searchTerm={searchTerm} selectedRegion={selectedRegion} />
    </div>
  );
}
