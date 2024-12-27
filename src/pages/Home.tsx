import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";
import CountriesGrid from "../components/CountriesGrid.tsx";
import React, { useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filters = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctic",
  ];

  function handleFiltersClick() {
    setFiltersOpen((prevState) => !prevState);
  }

  function handleFilterSelect(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    // assert that value will always be a string
    const value = e.currentTarget.dataset.value as string;

    // protect against invalid filters
    if (filters.includes(value) || value === "") {
      setSelectedRegion(value);
      setFiltersOpen(false);
    }
  }

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
        <div className={styles.filter}>
          <div className={styles.filterSelect} onClick={handleFiltersClick}>
            <div>{selectedRegion ? selectedRegion : "Filter By Region"}</div>
            <div className={styles.filterIcon}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          {filtersOpen && (
            <ul className={styles.filterOptions}>
              {selectedRegion && (
                <li
                  data-value={""}
                  onClick={handleFilterSelect}
                  style={{ color: "#E63946" }}
                >
                  Clear Filter
                </li>
              )}
              {filters.map((filter) => (
                <li
                  key={filter}
                  data-value={filter}
                  onClick={handleFilterSelect}
                >
                  {filter}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <CountriesGrid searchTerm={searchTerm} selectedRegion={selectedRegion} />
    </div>
  );
}
