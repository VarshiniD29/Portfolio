import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';
import skillsData from '../../data/MySkills.json'; // Ensure this JSON file has the required data
import { getImageUrl } from '../../utlis'; // Assume this function is used to get image URLs

const skillVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export const Skills = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => skillVariants.visible(i));
    } else {
      controls.start((i) => skillVariants.hidden);
    }
  }, [controls, inView]);

  return (
    <section className={styles.container} id="skills" ref={ref}>
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
          <h3>Organizational Skills</h3>
          <ul className={styles.skillList}>
            {['Leadership', 'Communication', 'Teamwork and Collaboration', 'Problem-Solving', 'Attention to Detail', 'Decision Making', 'Adaptability', 'Accepting Challenges'].map((skill, index) => (
              <motion.li
                key={skill}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={skillVariants}
                className={styles.skillItem}
              >
                <span className={styles.checkmark}>&#10004;</span>
                {skill}
              </motion.li>
            ))}
          </ul>
          
        </div>
      </div>
      <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>
  );
};
