
import styles from "./project.module.css";

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
              <img src="/images/Charizard X.png" alt="Charizard-X.png" border="0" />
            </div>
            <div className={styles["project-item-desc"]}>
              <div className={styles["project-title"]}>
                <h2>SomeShine</h2>
                <div className={styles["project-date"]}>
                  <img src="/svg/calendar.svg" alt="calendar-icon.svg" />
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
                  <img src="/svg/figma.svg" alt="figma-icon.svg" aria-label="Explore the figma project" />
                </a>
                <a
                  href="https://github.com/RoyhanRPL2/SomeShine"
                  target="_blank"
                >
                  <img src="/svg/github.svg" alt="github-icon.svg" aria-label="Go to the github repository"/>
                </a>
                <a
                  href="https://royhanrpl2.github.io/SomeShine/index.html"
                  target="_blank"
                >
                  <img src="/svg/browser.svg" alt="browser-icon.svg" aria-label="Go to the real website" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles["project-item"]}>
            <div className={styles["project-item-img-container"]}>
              <img src="/images/Torterra.png" alt="torterra.png" border="0" />
            </div>
            <div className={styles["project-item-desc"]}>
              <div className={styles["project-title"]}>
                <h2>NorthExpo</h2>
                <div className={styles["project-date"]}>
                  <img src="svg/calendar.svg" alt="calendar-icon.svg" />
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
                  <img src="/svg/figma.svg" alt="figma-icon.svg" aria-label="Explore the figma project" />
                </a>
                <a
                  href="https://github.com/RoyhanRPL2/NorthExpo-project"
                  target="_blank"
                >
                  <img src="/svg/github.svg" alt="github-icon.svg" aria-label="Go to the github repository" />
                </a>
                <a
                  href="https://northexpokudus.com"
                  target="_blank"
                >
                  <img src="/svg/browser.svg" alt="browser-icon.svg" aria-label="Go to the real website" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles["project-item"]}>
            <div className={styles["project-item-img-container"]}>
              <img src="images/Arcanine.png" alt="Arcanine.png" border="0" />
            </div>
            <div className={styles["project-item-desc"]}>
              <div className={styles["project-title"]}>
                <h2>Rora Cake</h2>
                <div className={styles["project-date"]}>
                  <img src="svg/calendar.svg" alt="calendar-icon.svg" />
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
                  <img src="/svg/figma.svg" alt="figma-icon.svg" aria-label="Explore the figma project" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles["project-item"]}>
            <div className={styles["project-item-img-container"]}>
              <img src="images/Blastoise.png" alt="Blastoise.png" border="0" />
            </div>
            <div className={styles["project-item-desc"]}>
              <div className={styles["project-title"]}>
                <h2>Sancode</h2>
                <div className={styles["project-date"]}>
                  <img src="svg/calendar.svg" alt="calendar-icon.svg" />
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
                  <img src="/svg/figma.svg" alt="figma-icon.svg" aria-label="Explore the figma project" />
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
