import React from "react";
import { InView } from 'react-intersection-observer';
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utlis";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <div ref={ref} className={`${styles.skillImage} ${inView ? styles.animate : ''}`}>
                <img src={getImageUrl("history/Exp3.png")} alt="Experience Image" />
              </div>
            )}
          </InView>
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <InView key={id} triggerOnce={false}>
              {({ inView, ref }) => (
                <li ref={ref} className={`${styles.historyItem} ${inView ? styles.animate : ''}`}>
                  <div className={styles.historyItemDetails}>
                    <h3>{historyItem.role}</h3>
                    <p>{historyItem.organisation}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => (
                        <li key={id}>{experience}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              )}
            </InView>
          ))}
        </ul>
      </div>
    </section>
  );
};
