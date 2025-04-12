import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textSection}>
        <h1>
          Hi, I'm <span className={styles.highlight}>Nitesh Patel</span>
        </h1>
        <h2>Web Designer</h2>
        <button className={styles.ctaButton}><Link to="/about">About me</Link></button>
      </div>
      <div className={styles.introSection}>
      
        <div className={styles.introText}>
          <h3>About Me</h3>
          <p>
            I'm a first year student of civil engineering. I belongs to Gwalior, M.P . I am interested in web developement with a passion for creating beautiful and
            functional websites. I love to explore new technologies and design
            trends.
          </p>
          <p>
            In my free time, I enjoy Cricket, freesbie, swimming and spending time
            with my family and friends.
          </p>
        </div>
      </div>
        
    </div>
  );
}

export default Home;