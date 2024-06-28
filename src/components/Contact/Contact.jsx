import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utlis"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:varshinid2992@gmail.com">varshinid2992@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/varshinid/">linkedin.com/varshinid</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/VarshiniD29">github.com/VarshiniD29</a>
        </li>
      </ul>
      <div className={styles.developmentRights}>
        <p> &copy; 2024 Developed by Varshini | All rights reserved.</p>
      </div>
    </footer>
  );
};
