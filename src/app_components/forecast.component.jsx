import React from 'react';
import './forecast.style.css'

/** Dependencies*/
import "bootstrap/dist/css/bootstrap.min.css";
import Collapsible from 'react-collapsible';

const Forecast = (props) =>{
	let forecast=props.forecast;
	console.log(forecast)
	return (

		// <Collapsible trigger={forecast[0].weather[0].main}>
		// 	<p>Hello there</p>
		// </Collapsible>

		(forecast ? 
			<div className='container'>
			{forecast.map((value, index) => {
				return(
					<Collapsible trigger={returnTime(value.dt)} triggerStyle={{background:'black', color:"white", margin:"200px"}} >
						<img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} width="150" height="150" alt="Weather Icon"/>
						<div margin="20px" background="red">
							<h3>{Math.round(value.temp)}</h3>
							<h3>{value.weather[0].description}</h3>
						</div>
					</Collapsible>
				)
			})} </div>
		:null)
	)
}

function dayOfWeek(dt){
	let date = new Date(dt*1000);
	let weekDay = date.getDay();
	let day=weekDay%7;
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	return days[day];

}

function returnTime(dt){
	let date = new Date(dt*1000);
	let hour = date.getHours();
	let ampm = "am";

	if(hour>12){
		ampm="pm";
		hour= hour-12;
	} else if(hour===0){
		hour=12
	}

	var time = hour + ampm;

	return time;
}

export default Forecast;