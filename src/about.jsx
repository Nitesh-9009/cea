import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>

      <div className={styles.skills}>
        <h2>Skills</h2>
          <ul className={styles.skillList}>
            <li>HTML / CSS / JavaScript</li>
            <li>React.js</li>
            <li>Django</li>
            <li>Figma</li>
            <li>Python</li>
            <li>C++</li>
          </ul>
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

export default About;
