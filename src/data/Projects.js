import hotel from "../images/hotel.jpg";
import weather from "../images/weather.jpg";
//import meal from "../images/mealsharing.jpg";
import fastestpresser from "../images/fastestpresser.jpg";
//import project from "../images/project.jpg";
import github from "../images/github.jpg";
import resume from "../images/resume.jpg";
import giphy from "../images/giphy.jpg";
import quizz from "../images/quizz.jpg";
import wordpress from "../images/wordpress.jpg";
import shoppingcart from "../images/shoppingcart.jpg";

const projects = [
  {
    id: 1,
    name: "Charlets app",
    image: wordpress,
    type: "wordpress",
    githubUrl: "https://github.com/mamathamereddy/charlets-app-",
    deployedUrl:
      "http://dev-chalets-and-caviar-luxury-chalets.pantheonsite.io/",
  },
  {
    id: 2,
    name: "Resume",
    image: resume,
    type: "Html, Css",
    githubUrl: "https://github.com/mamathamereddy/resume-",
    deployedUrl: "https://mamatha-resume.netlify.app",
  },
  {
    id: 3,
    name: "Fastest Presser",
    image: fastestpresser,
    type: "JavaScript",
    githubUrl: "https://github.com/mamathamereddy/fastestPresser",
    deployedUrl: "https://mamathamereddy.github.io/fastestPresser/",
  },
  {
    id: 4,
    name: "Weather App",
    image: weather,
    type: "JavaScript",
    githubUrl: "https://github.com/mamathamereddy/weather-app",
    deployedUrl: "https://mamathamereddy.github.io/weather-app/",
  },
  {
    id: 5,
    name: "Giphy search",
    image: giphy,
    type: "JavaScript-dom",
    githubUrl: "https://github.com/mamathamereddy/Giphi-api",
    deployedUrl: "https://giphy-searcher-site.netlify.app",
  },
  {
    id: 6,
    name: "github user searcher",
    image: github,
    type: "Reactjs",
    githubUrl: "https://github.com/mamathamereddy/github-user-searcher",
    deployedUrl: "https://user-searcher-github.netlify.app",
  },

  {
    id: 4,
    name: "Hotel Booking",
    image: hotel,
    type: "React/contentful",
    githubUrl: "https://github.com/mamathamereddy/resort-app",
    deployedUrl: "https://resort-contentful-app.netlify.app/",
  },
  {
    id: 4,
    name: "Shoppingcart",
    image: shoppingcart,
    type: "MERN/Redux",
    githubUrl: "https://github.com/mamathamereddy/React-redux-app",
    deployedUrl: "https://shoppingcart-react-withredux.netlify.app/",
  },
  {
    id: 5,
    name: "Quizz App",
    image: quizz,
    type: "React/Typescript",
    githubUrl: "https://github.com/mamathamereddy/Quiz-app",
    deployedUrl: "https://react-typescript-quizz-app.netlify.app/",
  },
  // {
  //   id: 5,
  //   name: "Meal sharing",
  //   image: meal,
  //   type: "Node/Express/Mysql",
  //   githubUrl: "https://github.com/mamathamereddy/mealsharing",
  //   deployedUrl: "https://hyf-meals-sharing.herokuapp.com/",
  // },

  // {
  //   id: 6,
  //   name: "HackYourFutureProject",
  //   image: project,
  //   type: "FullStack",
  //   githubUrl: "https://github.com/mamathamereddy/FP-class11",
  //   deployedUrl: "https://fp-class11.herokuapp.com/",
  // },
];

export default projects;
