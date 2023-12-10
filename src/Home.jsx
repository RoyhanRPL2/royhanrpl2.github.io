import React from "react";
import ProfileImg from "/src/assets/Profile-Picture.jpeg";
import "./home.css";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Layout from "./layout";
import Project from "./project";
import Cta from "../src/cta";
import styles from "../src/components/header/header.module.css";
import html from "/svg/html.svg";
import css from "/svg/css.svg";
import javascript from "/svg/javascript.svg";
import vue from "/svg/vue.svg";
import reactjs from "/svg/reactjs.svg";
import Footer from "./footer";

function Home() {
  return (
    <Layout>
      <header className={styles["header"]}>
        <h2>
          RoyhanBumi<span>.</span>
        </h2>
        <ul className={styles["navbar"]}>
          <li className={styles["navbar-item"]}>
            <a href="#portfolio-container">Project</a>
          </li>
          <li className={styles["navbar-item"]}>
            <a href="#">About</a>
          </li>
        </ul>
      </header>
      <div className="container">
        <main>
          <div className="profile-container">
            <div className="summary-container">
              <h1>
                <Typewriter
                  words={["Front End Developer", "UI/UX Designer"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p>
                I'm interested in web front end and creative things. located in
                Makassar, Indonesia.
              </p>
            </div>
            <div className="skill">
              <h2>skills</h2>
              <div className="skill-list">
                <img src={html} alt="Html image" />
                <img src={css}alt="CSS image" />
                <img src={javascript} alt="Javascript image" />
                <img src={vue} alt="Vue image" />
                <img src={reactjs} alt="React image" />
              </div>
            </div>
            <div className="section">
              <h3>
                I apologize for the content of this section, I don't have an
                idea yet.
              </h3>
            </div>
          </div>
          <div className="hero-img-wrapper">
            <div className="img-container">
              <img src={ProfileImg} alt="profile picture" />
            </div>
          </div>
        </main>
      </div>
      <div id="portfolio-container">
        <Project />
      </div>

      <div id="cta-container">
        <Cta />
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
