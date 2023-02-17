import React, { useState } from "react";

// const Education = () => {
//   return (
//     <div className="about" data-section="education" id="education">
//       <div className="container">
//         <div className="commone">
//           <h1 className="mainHeader">Education</h1>
//           <div className="commonBorder"></div>

//           <div className="education">
//             <input type="checkbox" id="title1" checked />
//             <label for="title1">UX design</label>

//             <div class="content">
//               <p>
//                 Redi school,copenhagen<span> 2021-2021</span>
//               </p>
//               <p>
//                 <b>Project:"wireframing for Østerland"</b>

//                 <ul>
//                   <li>Generative and Evaluative research.</li>
//                   <li>User Personas and Business Requirements</li>
//                   <li>Iterative Wire-framing and prototyping</li>
//                   <li>Usability Testing of the wireframe</li>
//                 </ul>
//               </p>
//             </div>

//             <input type="checkbox" id="title2" checked />
//             <label for="title2">FullStack development</label>
//             <div class="content">
//               <p>
//                 <b>Hack Your Future, Copenhagen</b>
//                 <span> 2019-2020</span>
//               </p>

//               <p>
//                 Hack Your Future is a coding school which offers a 32 week
//                 intensive course educating in the following languages..
//                 <ul>
//                   <li> HTML/CSS</li>
//                   <li> JavaScript</li>
//                   <li> Node.js</li>
//                   <li> Databases</li>
//                   <li> REACT</li>
//                   <li> Final project</li>
//                   <p>
//                     <b>
//                       Project:Developing Dashbord web-application for company
//                       (seasony.dk)which is a startup specializing in vertical
//                       farming with robotics.
//                     </b>
//                   </p>
//                   <p>
//                     <b>
//                       Stack: React.js, Storybook, Recharts, Firebase, Node.js,
//                       Knex.js, MySQL, Swagger
//                     </b>
//                   </p>
//                   <p>
//                     Dashbord web-application shows different batch/crop details
//                     in vertical forming and visualises data received from
//                     sensors and displays the data into charts, where we can see
//                     the water, ph and humidity levels of crop/batch on chart.
//                   </p>
//                   <p>
//                     <b>Responsibilities:</b>
//                   </p>
//                   <li>
//                     I was part of team of 13.Contributed to the frontend using
//                     JavaScript, ReactJS and storybook in creating components and
//                     passing data to charts.
//                   </li>
//                   <li>
//                     used Swagger, Postman to check end points, version control
//                     tools like Git while pushing code to production.
//                   </li>
//                   <li>Involved in creating tables in knex.js</li>
//                 </ul>
//               </p>
//             </div>

//             <input type="checkbox" id="title2" checked />
//             <label for="title2">
//               Masters in computer Applications Osmania University,India
//               <span> 2004-2007</span>
//             </label>

//             <div class="content">
//               <p>
//                 Osmania University,India<span> 2004-2007</span>
//               </p>
//               <p>
//                 <b>Project:"TechnoTask Management"</b>
//                 <p>
//                   <b>Stack:ASP.NET with C#,SQL Server 2000 with IIS Server</b>
//                 </p>
//                 Techno Task Management is a webbased applicaton where in
//                 employees spans over in different departments.This application
//                 is desined for such an environment where the work is divided
//                 into group of employees and during the course of division the
//                 employees are selected to be part of the work in hand.
//                 <p>
//                   <b>Responsibilities:</b>
//                 </p>
//                 <ul>
//                   <li>
//                     Analysis of the specifications provided by the clients.
//                   </li>
//                   <li>
//                     Involved Database Designing and created Database tables in
//                     SQL
//                   </li>
//                   <li>Involved in client and server side coding</li>
//                 </ul>
//               </p>
//             </div>

//             <input type="checkbox" id="title3" checked />
//             <label for="title3">Bacholers in Computer Science</label>

//             <div class="content">
//               <p>
//                 Osmania University,India<span> 2001-2004</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;

import { accordionData } from "../data/content";
const Education = () => {
  return (
    <div className="about" data-section="education" id="education">
      <div className="container">
        <div className="commone">
          <h1 className="mainHeader">Education</h1>
          <div className="commonBorder"></div>
          <div className="container">
            <div className="accordion">
              {accordionData.map(({ title, content, project }) => (
                <Accordion title={title} content={content} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ title, content, project }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {project}

          <div className="accordion-content">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Education;
