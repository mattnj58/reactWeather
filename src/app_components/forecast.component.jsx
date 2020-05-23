import React from 'react';
import './forecast.style.css'

/** Dependencies*/
import "weather-icons/css/weather-icons.css"; //git project from https://github.com/erikflowers/weather-icons
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';


const Forecast = (props) =>{
	let forecast=props.forecast;

	return (
		(forecast ? 
			<div className='container' margin='3rem'>
			{forecast.map((value, index) => {
				console.log(value.weather[0].icon)
				let iconUrl = `https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`
				console.log(iconUrl)
				return (
					<Table key={index}>
						<tbody>
							<tr>
								<td align="center" width="10%">{dayOfWeek(value.dt)}</td>
								<td align="center" width="5%">{returnTime(value.dt)}</td>
								{/*<td align='center' width="20%">{value.weather[0].description}</td>*/}
								<td align='center' width="5%"><img src={iconUrl} alt=""></img></td>
								<td align="center" width="10%">{Math.round(value.main.temp)}&deg;F</td>
							</tr>
						</tbody>
					</Table>
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
	}

	var time = hour + ampm;

	return time;
}

export default Forecast;