import React from "react";
import styles from "./cta.module.css";

function Blog() {
  return (
    <>
      <div id={styles["contact-wrap"]}>
        <div className={styles["contact-title-wrap"]}>
          <small className={styles["contact-subtitle"]}>
            Available Nov. 2023
          </small>
          <h1 className={styles["contact-title"]}>Hire Me!</h1>
          <span className={styles["contact-emoji"]}>👋</span>
          <small className={styles["contact-subtitle"]}>Or just say hi</small>
        </div>
        <div className={styles["contact-cta-wrap"]}>
          <div className={styles["contact-cta-item"]}>
            <h3 className={styles["contact-cta-item-title"]}>
              <span>✉️</span>
              <a href="mailto:royhanbumi227@gmail.com">
                royhanbumi227@gmail.com
              </a>
            </h3>
          </div>
          <div className={styles["contact-cta-item"]}>
            <h3 className={styles["contact-cta-item-title"]}>
              <span>📱</span>
              <a href="tel:+628875175662">
                +62 887 5175 662
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
