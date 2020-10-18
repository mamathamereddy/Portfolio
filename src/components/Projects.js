import React from "react";
import ProjectsData from "../data/Projects";

const Projects = () => {
  return (
    <div className="about" data-section="projects" id="projects">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">Projects</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="featured-rooms-center">
          {ProjectsData.map((item) => {
            return (
              <article className="room">
                <div className="img-container">
                  <img src={item.image} alt="rooms" />
                  <div className="price-top">
                    <h6>{item.type}</h6>
                    <p>app</p>
                  </div>
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary room-link"
                  >
                    SOURCE CODE
                  </a>

                  <a
                    href={item.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary room-link"
                  >
                    site
                  </a>
                </div>
                <p className="room-info">{item.name}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
