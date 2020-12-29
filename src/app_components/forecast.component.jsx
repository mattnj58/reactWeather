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
				let iconUrl = `http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`
				return (
					<Table key={index}>
						<tbody>
							<tr>
								<td align="center" width="10%">{dayOfWeek(value.dt)}</td>
								<td align="center" width="5%">{returnTime(value.dt)}</td>
								<td align='center' width="5%">
									<img src={iconUrl} alt=""></img>
									<p>{value.weather[0].description}</p>
								</td>
								<td align="center" width="10%">{Math.round(value.temp)}&deg;F</td>
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
	} else if(hour===0){
		hour=12
	}

	var time = hour + ampm;

	return time;
}

export default Forecast;