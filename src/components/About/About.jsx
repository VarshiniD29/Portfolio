import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.css";
import Varshini_Resume from "../../../assets/about/Varshini_Resume.pdf";
import { getImageUrl } from "../../utlis";

export const About = () => {
  const handleDownloadResume = () => {
    window.open(Varshini_Resume);
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, //  animation triggers every time it comes into view
    threshold: 0.1, 
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 1.8 },
      });
    } else {
      controls.start({
        opacity: 0,
      });
    }
  }, [controls, inView]);

  return (
    <section className={styles.container} id="about" ref={ref}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Software Engineer Woman"
          className={styles.aboutImage}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          className={styles.aboutItemText}
        >
           <p>
            Driven by a passion for Full Stack Development and armed with a
            Master's degree in Computer Science from Purdue University, I am a
            recent graduate eager to make a meaningful impact in an entry-level
            role. With a strong foundation in {" "}
            <span className={styles.highlightBackground}>
             Algorithms, Databases, Java, Python, and Full-Stack technologies</span>
            
            , I am poised to contribute to innovative projects that redefine
            technological boundaries. I am actively pursuing opportunities to
            apply my academic prowess to real-world challenges, eager to grow
            both professionally and personally.
          </p>
          <button className={styles.resumeButton} onClick={handleDownloadResume}>
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};
