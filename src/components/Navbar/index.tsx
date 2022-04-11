import React from "react";
import Navigation from "../Navigation";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <span>CollegeTaskManager</span>
      </nav>
      <Navigation />
    </>
  );
}
