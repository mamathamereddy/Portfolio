import React from "react";
import SkillsData from "../data/SkillsData";

const Skills = () => {
  const [header] = React.useState({
    subHeading: "Skills",
  });
  return (
    <div className="skills" data-section="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <div className="common">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {SkillsData.map((info) => (
              <div className="col-4 bgMain">
                <img
                  className="skills__box"
                  src={info.imageUrl}
                  alt={info.text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
