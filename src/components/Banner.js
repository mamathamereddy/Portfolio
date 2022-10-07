import React from "react"; //change image in this page
import image from "../images/mamatha-01.png";
import Slide from "react-reveal/Slide";
import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I'm Mamatha",
    text: "Passionate and having experience in building the webapplications from scratch while being Interested in learning new frameworks and technologies in a fast pace.",
    // "Passionate in developing user friendly and responsive frontend applications while being eager obtain a responsible and challenging Front-end Developer position . where I can contribute my skills.Interested in learning new frameworks and technologies in a fast pace.",
  });
  return (
    <header className="header" data-section="home" id="home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <Slide left>
                <div className="header__section">
                  <h1>{state.title}</h1>
                  <p>{state.text}</p>
                  <ul className="header__ul">
                    <a
                      href="https://github.com/mamathamereddy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li>
                        <FaGithubAlt className="headerIcon" />
                      </li>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/mereddy-mamatha/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li>
                        <FaLinkedinIn className="headerIcon" />
                      </li>
                    </a>
                  </ul>

                  <div className="header__buttons">
                    <a href="#projects" className="btn btn-outline">
                      My Projects
                    </a>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <Slide right>
                <img src={image} alt="mamatha pic" />
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
