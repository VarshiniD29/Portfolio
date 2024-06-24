import React from 'react';
import styles from './Skills.module.css';
import skillsData from '../../data/MySkills.json'; // Ensure this JSON file has the required data
import { getImageUrl } from '../../utlis'; // Assume this function is used to get image URLs

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skillCategories}>
          {skillsData.map((category, id) => (
            <div key={id} className={styles.category}>
              <h3>{category.categoryName}</h3>
              {category.skills.map((skill, skillId) => (
                <div key={skillId} className={styles.skill}>
                  <div className={styles.skillInfo}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    <p>{skill.title}</p>
                  </div>
                  <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: `${skill.percentage}%` }}>
                      <span className={styles.progressText}>{skill.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.interpersonalSkills}>
        <h3>Interpersonal Skills</h3>
          <ul className={styles.skillList}>
            <li>Leadership <span className={styles.checkmark}>&#10004;</span></li>
            <li>Communication <span className={styles.checkmark}>&#10004;</span></li>
            <li>Teamwork and Collaboration <span className={styles.checkmark}>&#10004;</span></li>
            <li>Problem-Solving <span className={styles.checkmark}>&#10004;</span></li>
            <li>Attention to Detail <span className={styles.checkmark}>&#10004;</span></li>
            <li>Decision Making <span className={styles.checkmark}>&#10004;</span></li>
            <li>Adaptability <span className={styles.checkmark}>&#10004;</span></li>
            <li>Accepting Challenges <span className={styles.checkmark}>&#10004;</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};
