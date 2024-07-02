import React ,{useState, useEffect} from 'react'
import styles from './Intro.module.css'
import { getImageUrl } from "../../utlis"

const Intro = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) { // Adjust the offset value as needed
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
    {showButton && (
        <button onClick={scrollToTop} className={styles.scrollToTop}>
         <span> &#8593;</span> {/* Unicode for upward arrow */}
        </button>
      )}
    <img
      src={getImageUrl("hero/Profile2.png")}
      alt="Profile Picture"
      className={styles.heroImg}
    />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  )
}

export default Intro
