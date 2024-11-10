import React from "react";
import { skills } from "../data/constants";  // Correct relative path
import { SkillCategory } from "../type/type";    // Correct relative path

const Skills: React.FC = () => {
  return (
    <div id="skills" className="container">
      <div className="skills-wrapper">
        <div className="skills-title">Skills</div>
        <div className="skills-cards">
          {skills.map((category: SkillCategory) => (
            <div
              key={category.title}
              className="skill-card"
            >
              <div className="skill-card-content">
                <h2>{category.title}</h2>
                <div className="skill-items">
                  {category.skills.map((skill) =>  (
                    <div key={skill.name} className="skill-item">
                      <img src={skill.image} alt={skill.name} />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
