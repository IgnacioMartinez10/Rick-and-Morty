import React from "react";
import styles from "./About.module.css"

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.info}>
        <h1>Ignacio Martinez</h1>
        <img src="../../img/logo.png" alt="" />
      </div>
    </div>
  );
}

export default About;
