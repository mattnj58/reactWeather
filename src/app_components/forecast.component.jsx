import React from 'react';

/** Dependencies*/
import "weather-icons/css/weather-icons.css"; //git project from https://github.com/erikflowers/weather-icons
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';
import * as weatherIcons from '../icons';

const Forecast = (props) =>{
	let forecast=props.forecast;

	return (
		(forecast ? <div className='container'>
			{forecast.map((value, index) => {
				return (
					<Table key={index}>
						<tbody>
							<tr>
								<td align="center" width="30%">{dayOfWeek(value.dt)}</td>
								<td align="center" width="30%">{returnTime(value.dt)}</td>
								<td align='center' width="30%">{value.weather[0].description}</td>
								{/*<td align='center' width="30%">{weatherIcons.default[value.fIcon[index]].icon}</td>*/}
								<td align="center" width="30%">{Math.round(value.main.temp)}&deg;F</td>
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