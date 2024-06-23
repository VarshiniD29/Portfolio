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
                    <div className={styles.progressBar} style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.interpersonalSkills}>
          <h3>Interpersonal Skills</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
          <p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
        </div>
      </div>
    </section>
  );
};
