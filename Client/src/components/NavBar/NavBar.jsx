import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

export default function NavBar({ onSearch }) {
  return (
    <div className={styles.container}>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/home">
      <button>Home</button>
      </Link>
      <Link to="/favorites">
      <button>Favorites</button>
      </Link>

      
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
