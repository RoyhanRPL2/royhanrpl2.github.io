
import styles from "./project.module.css";
import React from "react";
import Charizard from "/images/Charizard-X.png";
import torterra from "/images/Torterra.png";
import arcanine from "/images/Arcanine.png";
import blastoise from "/images/Blastoise.png";
import calendar from "/svg/calendar.svg";
import figma from "/svg/figma.svg";
import github from "/svg/github.svg";
import browser from "/svg/browser.svg";
import sancode from "/images/sancode-mockup.png"
import someshine from "/images/SomeShine.png"
import northexpo from "/images/Northexpo.png"
import roracake from "/images/roracake-mockup.png"


function Project() {
  return (
    <>
      <div className={styles["project-container"]}>
        <div className={styles["title-wrapper"]}>
          <h1>PROJECT</h1>
          <p>
            some creative projects that I have developed and used as projects at
            school with friends such as UI/UX design, websites, and
            applications.
          </p>
        </div>
        <main>
          <div className={styles["project-item"]}>
            <div className={styles["project-item-img-container"]}>
              <img src={someshine} alt="Charizard-X.png" border="0" />
            </div>
            <div className={styles["project-item-desc"]}>
              <div className={styles["project-title"]}>
                <h2>SomeShine</h2>
                <div className={styles["project-date"]}>
                  <img src={calendar} alt="calendar-icon.svg" />
                  <p>September 2023</p>
                </div>
              </div>
              <div className={styles["project-category"]}>
                <p>Website</p>
              </div>
              <div className={styles["project-platform"]}>
                <a
                  href="https://www.figma.com/file/aXyKDLmAkE5TshjlA9iBfZ/Sancode?type=design&node-id=0%3A1&mode=design&t=uo47AZQc1rdt9lMT-1"
                  target="_blank"
                >
                  <img src={figma} alt="figma-icon.svg" aria-label="Explore the figma project" />
                </a>
                <a
                  href="https://github.com/RoyhanRPL2/SomeShine"
                  target="_blank"
                >
                  <img src={github} alt="github-icon.svg" aria-label="Go to the github repository"/>
                </a>
                <a
                  href="https://royhanrpl2.github.io/SomeShine/index.html"
                  target="_blank"
                >
                  <img src={browser} alt="browser-icon.svg" aria-label="Go to the real website" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles["project-item"]}>
            <div className={styles["project-item-img-container"]}>
              <img src={northexpo} alt="torterra.png" border="0" />
            </div>
            <div className={styles["project-item-desc"]}>
              <div className={styles["project-title"]}>
                <h2>NorthExpo</h2>
                <div className={styles["project-date"]}>
                  <img src={calendar} alt="calendar-icon.svg" />
                  <p>March 2023</p>
                </div>
              </div>
              <div className={styles["project-category"]}>
                <p>Website</p>
              </div>
              <div className={styles["project-platform"]}>
                <a
                  href="https://www.figma.com/file/aXyKDLmAkE5TshjlA9iBfZ/Sancode?type=design&node-id=0%3A1&mode=design&t=uo47AZQc1rdt9lMT-1"
                  target="_blank"
                >
                  <img src={figma} alt="figma-icon.svg" aria-label="Explore the figma project" />
                </a>
                <a
                  href="https://github.com/RoyhanRPL2/NorthExpo-project"
                  target="_blank"
                >
                  <img src={github} alt="github-icon.svg" aria-label="Go to the github repository" />
                </a>
                <a
                  href="https://northexpokudus.com"
                  target="_blank"
                >
                  <img src={browser} alt="browser-icon.svg" aria-label="Go to the real website" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles["project-item"]}>
            <div className={styles["project-item-img-container"]}>
              <img src={roracake} alt="Arcanine.png" border="0" />
            </div>
            <div className={styles["project-item-desc"]}>
              <div className={styles["project-title"]}>
                <h2>Rora Cake</h2>
                <div className={styles["project-date"]}>
                  <img src={calendar} alt="calendar-icon.svg" />
                  <p>March 2021</p>
                </div>
              </div>
              <div className={styles["project-category"]}>
                <p>UI/UX Design</p>
              </div>
              <div className={styles["project-platform"]}>
                <a
                  href="https://www.figma.com/file/aztw7rvrJ4quax17kNwkN0/Landing-Page-Rora-Cake?type=design&node-id=5%3A2&mode=design&t=92EMVgRPohS4rf1e-1"
                  target="_blank"
                >
                  <img src={figma} alt="figma-icon.svg" aria-label="Explore the figma project" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles["project-item"]}>
            <div className={styles["project-item-img-container"]}>
              <img src={sancode} alt="Blastoise.png" border="0" />
            </div>
            <div className={styles["project-item-desc"]}>
              <div className={styles["project-title"]}>
                <h2>Sancode</h2>
                <div className={styles["project-date"]}>
                  <img src={calendar} alt="calendar-icon.svg" />
                  <p>January 2022</p>
                </div>
              </div>
              <div className={styles["project-category"]}>
                <p>UI/UX Design</p>
              </div>
              <div className={styles["project-platform"]}>
                <a
                  href="https://www.figma.com/file/aXyKDLmAkE5TshjlA9iBfZ/Sancode?type=design&node-id=0%3A1&mode=design&t=uo47AZQc1rdt9lMT-1"
                  target="_blank"
                >
                  <img src={figma} alt="figma-icon.svg" aria-label="Explore the figma project" />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Project;
