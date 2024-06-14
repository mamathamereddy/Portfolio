import React from "react";
import Slide from "react-reveal/Slide";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    // text:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  // const [state] = React.useState([
  //   { id: 1, title: "Name:", text: "Mamatha Mereddy" },
  //   { id: 2, title: "Email:", text: "mamatha.mereddy@gmail.com" },
  //   { id: 3, title: "GitHub:", text: "https://github.com/mamathamereddy" },
  //   {
  //     id: 4,
  //     title: "Linkedin",
  //     text: "https://www.linkedin.com/in/mereddy-mamatha",
  //   },
  // ]);
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
              <Slide left>
                <div className="about__info-p1">
                  {/* I'm Enthusiastic and highly motivated with hands-on experience
                  in creating websites that provide a clean and user-friendly
                  experience . Also, I am highly motivated to learn new
                  technologies in a fast pace, and deepen my knowledge and
                  experience in coding and development/ */}
                  I am an enthusiastic and highly motivated developer with
                  hands-on experience in creating clean and user-friendly
                  websites. Driven by a passion for rapidly learning new
                  technologies, I am committed to deepening my knowledge and
                  expertise in coding and development.
                </div>
                <div className="about__info-p2">
                  To restart my career as a developer, I embarked on a journey
                  at
                  <a
                    target="_blank"
                    href="https://www.hackyourfuture.dk/"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    HackYourFuture coding school
                  </a>
                  here, I worked on diverse projects, gaining practical
                  experience with HTML, CSS, JavaScript, React, Node.js,
                  Express.js, MySQL, and more.
                </div>
                <div className="about__info-p2">
                  Upon graduating from HackYourFuture, I joined
                  <a
                    target="_blank"
                    href="https://www.ating.app//"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Ating aps.
                  </a>
                  and later
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/thejoynapp/about/"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    JOYN{" "}
                  </a>
                  as a React Native developer. During this time, I refined my
                  skills in React, React Native, MongoDB, and Firebase
                  Firestore. I gained confidence in developing robust
                  applications and collaborating with UI/UX designers and
                  back-end developers to optimize performance and enhance user
                  experiences.
                </div>

                <div className="about__info-p2">
                  Subsequently, I worked at
                  <a
                    target="_blank"
                    href="https://www.fuelvision.io/"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Fuelvision{" "}
                  </a>
                  as a React Native developer, where I was one among to built
                  the first version of the application from scratch using
                  JavaScript, React, React Native, and TypeScript.
                </div>
                <div className="about__info-p2">
                  Most recently, I am a developer at
                  <a
                    target="_blank"
                    href="https://proroom.dk/"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    ProRoom{" "}
                  </a>
                  where I developed new features for the mobile app on both iOS
                  and Android, optimized app components, and enhanced the
                  product’s features and performance. I collaborated closely
                  with designers and back-end developers to optimize database
                  queries and improve overall application performance.
                  Additionally, I ma
                </div>
                {/* <div className="info__contacts">
                  <div className="row">
                    {state.map((info) => (
                      <div className="col-6">
                        <strong>{info.title}</strong>
                        <p>{info.text}</p>
                      </div> 
                    ))}
                  </div>
                    </div>*/}
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
