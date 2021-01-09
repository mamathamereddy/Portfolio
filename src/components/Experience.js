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
                <span> 6/2020-12/2020</span>
              </h4>
              <p>
                Ating aps is a software solution for creating the most gameable
                way to meet new friends for everyone around the world.
              </p>
              <p className="task">Tasks Performed</p>
              <ul>
                <li>
                  {" "}
                  Building web site from scratch with React and Reactnative
                  components.
                </li>
                <li>working on resposive design</li>
                <li>
                  Focus on personal projects to try technologies like test
                  driven development, Rest APIs, Redux as part of learning new
                  skills.
                </li>
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
              <p className="task">Tasks Performed</p>
              <ul>
                <li>
                  Responsible for production activities based on customers
                  orders.
                </li>
                <li>
                  Monitor and manage on-going workflow to ensure timely delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

//https://www.ating.app/
