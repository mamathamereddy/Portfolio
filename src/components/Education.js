import React from "react";

const Education = () => {
  return (
    <div className="about" data-section="education" id="education">
      <div className="container">
        <div className="commone">
          <h1 className="mainHeader">Education</h1>
          <div className="commonBorder"></div>

          <div className="education">
            <input type="checkbox" id="title1" checked />
            <label for="title1">Full Stack Development</label>

            <div class="content">
              <p>
                Hack Your Future, Copenhagen<span> 2019-2020</span>
              </p>

              <p>
                The curriculum includes
                HTML/CSS/Git/JavaScript/NodeJS+ExpressJS/React
              </p>
            </div>

            <input type="checkbox" id="title2" checked />
            <label for="title2">Masters in computer Applications</label>

            <div class="content">
              <p>
                Osmania University,India<span> 2004-2007</span>
              </p>
            </div>

            <input type="checkbox" id="title3" checked />
            <label for="title3">Bacholers in Computer Science</label>

            <div class="content">
              <p>
                Osmania University,India<span> 2001-2004</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
