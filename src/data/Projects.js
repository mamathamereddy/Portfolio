import hotel from '../images/hotel.png';
import weather from '../images/weather.png';
import meal from '../images/mealsharing.jpg'
import fastestpresser from '../images/fastestpresser.jpg'
import project from '../images/project.jpg'
import github from '../images/github.jpg'



const projects = [
	{
		id: 1,
		name:"Hotel Booking",
		image:hotel,
	    type:"MERN Stack",
        githubUrl:'https://github.com/mamathamereddy/HotelBooking-Client',
        deployedUrl:"hotel-bookingapp.netlify.app/"
	},
	
	{
		id: 2,
		name:"HackYourFutureProject",
		image: project,
	    type:"FullStack",
        githubUrl:'https://github.com/mamathamereddy/FP-class11',
        deployedUrl:"https://fp-class11.herokuapp.com/"
		
	},
	{
		id: 3,
		name:"github user searcher",
		image:github ,
	    type:"Reactjs",
        githubUrl:'https://github.com/mamathamereddy/github-user-searcher',
        deployedUrl:"https://react-github-user-search-app.herokuapp.com/"
	},
	{
		id: 4,
		name:"Meal sharing",
		image: meal,
	    type:"Node/Express/Mysql",
        githubUrl:'https://github.com/mamathamereddy/mealsharing',
		deployedUrl:"https://hyf-meals-sharing.herokuapp.com/"
	},
	{
		id: 5,
		name:"Weather App",
		image:weather,
	    type:"JavaScript",
        githubUrl:'https://github.com/mamathamereddy/weather-app',
        deployedUrl:"https://mamathamereddy.github.io/weather-app/"
	},
	
	{
		id: 6,
		name:"Fastest Presser",
		image: fastestpresser,
	    type:"javaScript",
        githubUrl:'https://github.com/mamathamereddy/fastestPresser',
        deployedUrl:"https://mamathamereddy.github.io/fastestPresser/"
	},
	
	
];

export default projects

