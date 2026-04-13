import React from "react";
import styles from "./Search.module.css";

function Search() {
  return (
    <input
      type="text"
      placeholder="Search a album of your choice"
      className={styles.search}
    />
  );
}

export default Search;
