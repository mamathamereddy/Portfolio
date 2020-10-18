import React from "react"; //change image in this page
import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I'm Mamatha",
    text:
      "I'm Passinated in developing frontend applications and \
    also intrested in learning new frameworks like React and ReactNative\
     as well as work with WordPress.\
     I also enjoy ui,ux",
    image: "/images/mamatha-01.png",
  });
  return (
    <header className="header" data-section="home" id="home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <ul className="header__ul">
                  <a href="https://www.facebook.com/mamatha.mereddy">
                    <li>
                      <FaFacebookF className="headerIcon" />
                    </li>
                  </a>

                  <a href="https://github.com/mamathamereddy">
                    <li>
                      <FaGithubAlt className="headerIcon" />
                    </li>
                  </a>

                  <a href="https://www.linkedin.com/in/mereddy-mamatha/">
                    <li>
                      <FaLinkedinIn className="headerIcon" />
                    </li>
                  </a>

                  <a href="https://www.instagram.com/mamatha.mereddy/">
                    <li>
                      <FaInstagram className="headerIcon" />
                    </li>
                  </a>
                </ul>

                <div className="header__buttons">
                  <a href="#projects" className="btn btn-outline">
                    My Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="mamatha pic" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
