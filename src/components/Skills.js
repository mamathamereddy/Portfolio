import React from "react";
import SkillsData from "../data/SkillsData";
import Flip from "react-reveal/Flip";


const Skills = () => {
  const [header] = React.useState({
    subHeading: "Skills",
  });
  return (
    
    <div className="skills" data-section="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <div className="common">
          <Flip right cascade>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
            </Flip>
          </div>

          <div className="row bgMain">
            {SkillsData.map((info) => (
              <div className="col-4 bgMain">
                <Flip right cascade>
                <img
                  className="skills__box"
                  src={info.imageUrl}
                  alt={info.text}
                />
                </Flip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Skills;
