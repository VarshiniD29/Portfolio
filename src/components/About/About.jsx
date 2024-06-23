import React from "react";

import styles from "./About.module.css";
import Varshini_Resume from "../../../assets/about/Varshini_Resume.pdf"
import { getImageUrl } from "../../utlis"

export const About = () => {
  const handleDownloadResume = () => {
    window.open(Varshini_Resume); 
  };
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
            <div className={styles.aboutItemText}>
              <p>
              Driven by a passion for Full Stack Development and armed with a Master's degree in Computer Science from Purdue University, 
              I am a recent graduate eager to make a meaningful impact in an entry-level role. 
              With a strong foundation in Algorithms, Databases, Java, Python, and full-stack technologies, I am poised to contribute to innovative projects that redefine technological boundaries. 
              I am actively pursuing opportunities to apply my academic prowess to real-world challenges, eager to grow both professionally and personally.
              </p>
             
            <button className={styles.resumeButton} onClick={handleDownloadResume}>
           Download Resume
          </button>
          </div> 
      </div>
    </section>
  );
};
