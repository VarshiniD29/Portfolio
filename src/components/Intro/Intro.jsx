import React from 'react'
import styles from './Intro.module.css'
import { getImageUrl } from "../../utlis"

const Intro = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hello, This is Varshini !!</h1>
      <p className={styles.description}>
        An Ambitious & Self-driven recent graduate  with a passion for Full-Stack development and a drive for excellence.
      </p>
      <a href="mailto:varshinid2992@gmail.com" className={styles.contactBtn}>
        Hire Me
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
