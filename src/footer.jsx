import React from "react";
import styles from "./footer.module.css";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <>
      <footer>
        <div className="title-wrapper">
          <h2>
            RoyhanBumi<span>.</span>
          </h2>
        </div>
        <ul className={styles["social-media-list"]}>
          <li className={styles["social-media-list-item"]}>
            <a
              href="https://www.linkedin.com/in/royhan-bumi/"
              target="_blank"
            >
            <Icon className={styles["social-icon"]} icon="mdi:linkedin" />
            <span>LinkedIn</span>
            <Icon
              icon="ion:arrow-up-sharp"
              className={styles["arrow-icon"]}
            />
            </a>
          </li>
          <li className={styles["social-media-list-item"]}>
            <a
              href="https://www.instagram.com/royhan.oy/"
              target="_blank"
            >
            <Icon className={styles["social-icon"]} icon="mdi:instagram" />
            <span>Instagram</span>
            <Icon
              icon="ion:arrow-up-sharp"
              className={styles["arrow-icon"]}
            />
            </a>
          </li>
          <li className={styles["social-media-list-item"]}>
            <a
              href="https://github.com/RoyhanRPL2"
              target="_blank"
            >
            <Icon className={styles["social-icon"]} icon="mdi:github" />
            <span>GitHub</span>
            <Icon
              icon="ion:arrow-up-sharp"
              className={styles["arrow-icon"]}
            />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
