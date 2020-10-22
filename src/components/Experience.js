import React from "react";


const Experience = () => {
  return (
    <div className="skills" data-section="experience" id="experience">
      <div className="container">
        <h1 className="headerExp">Experience</h1>
        <div className="commonBorder"></div>

        <div class="timeline">
          <div class="containerExp left">
            <div class="content">
              <h4>
                Frontend developer(Intern)@ ating aps{" "}
                <span> 6/2020-present</span>
              </h4>
              <p>
                Ating aps is a software soulution for creating the most gameable
                way to meet new friends for everyone around the world.
              </p>
              <p className="task">Tasks Performed</p>
              <ul>
                <li>Developed the frontend pages</li>
                <li>fecting and displaying data</li>
                <li>worked with reat and React Native</li>
              </ul>
            </div>
          </div>
          <div class="containerExp right">
            <div class="content">
              <h4>
                Tolker @Tolk Denmark <span> 2018-2020</span>
              </h4>
              <p>
                Translating for non danish people from danish to English/Telugu
                and ViceVersa
              </p>
            </div>
          </div>
          <div class="containerExp left">
            <div class="content">
              <h4>
                Production Specialst @DFD <span> 2011-2017</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

//https://www.ating.app/
