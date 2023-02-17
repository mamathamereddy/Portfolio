import React from "react";
import SkillsData from "../data/SkillsData";
import Flip from "react-reveal/Flip";

const Skills = () => {
  const skills = [
    "Html",
    "css",
    "Javascript",
    "React",
    "Reactanative",
    "Nodejs",
    "ExpressJs",
    "Storybook",
    "MySql",
    "Git",
    "MongoDb",
    "Wordpress",
    "Figma",
  ];
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
            <div className="col-4 bgMain">
              <Flip right cascade>
                <p>
                  {skills.map((skill) => (
                    <span className="label warning">{skill}</span>
                  ))}
                </p>
              </Flip>
            </div>

            {SkillsData.map((info) => (
              <div class="profile-card">
                <div class="image">
                  <img
                    alt=""
                    border="0"
                    height="100"
                    width="100"
                    src={info.imageUrl}
                  />
                </div>
                <div class="text-data">
                  <span class="name">{info.heading}</span>
                </div>
                <div class="text-sub">
                  <span class="name">{info.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
