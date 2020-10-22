import React from "react";
import Slide from "react-reveal/Slide";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    // text:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Mamatha Mereddy" },
    { id: 2, title: "Email:", text: "mamathavangala1@gmail.com" },
    { id: 3, title: "Phone:", text: "+45 42799884" },
    {
      id: 4,
      title: "Linkedin",
      text: "https://www.linkedin.com/in/mereddy-mamatha",
    },
  ]);
  return (
    
    <div className="about" data-section="about" id="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          {/* <p className="mainContent">{header.text}</p> */}
          <div className="commonBorder"></div>
        </div>
        <div className="row  ">
          <div className="col-12">
            <div className="about__info">
            <Slide left >
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I'm Enthusiastic and highly motivated with hands-on experience
                in creating websites that provide a clean and user-friendly
                experience . Also, I am highly motivated to learn new
                technologies in a fast pace, and deepen my knowledge and
                experience in coding and development
              </div>
              <div className="about__info-p2">
                when i decided to restart my carrer as developer,I want to
                upgraded myself,so started my journey with HackYourFuture coding
                school , where I was working on different projects and gained
                hands-on experience in working with Html, css, JavaScript, React,
                NodeJS, ExpressJS, MySQL etc.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default About;
