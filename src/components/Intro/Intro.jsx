import React from 'react'
import styles from './Intro.module.css'
import { getImageUrl } from "../../utlis"

const Intro = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hello, This is Varshini Dunnala!</h1>
      <p className={styles.description}>
        A Passionate & Self-driven recent grad student with an interest in using React and
        NodeJS. Reach out if you'd like to learn more!
      </p>
      <a href="mailto:varshinid2992@gmail.com" className={styles.contactBtn}>
        Contact Me
      </a>
    </div>
    <img
      src={getImageUrl("hero/heroImage.png")}
      alt="Profile Picture"
      className={styles.heroImg}
    />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  )
}

export default Intro
