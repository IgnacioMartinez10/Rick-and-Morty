import React from "react";
import styles from "./Error.module.css"

export default function Error() {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.space}></div>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <span>404</span>
        </div>
        <p>
          The page you are trying to search has been moved to another universe.
        </p>
        <button type="button">GET ME HOME</button>
      </div>
    </div>
  );
}
