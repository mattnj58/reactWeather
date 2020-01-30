import React from 'react';

/** Dependencies*/
import "weather-icons/css/weather-icons.css"; //git project from https://github.com/erikflowers/weather-icons
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';


const Forecast = (props) =>{
	let forecast=props.forecast;

	return (
		(forecast ? <div className='container'>
			{forecast.map((value, index) => {
				return (
					<Table key={index}>
						<tbody>
							<tr>
								<td>{returnTime(value.dt)}</td>
								<td>{Math.round(value.main.temp_max)}&deg;F</td>
								<td>{Math.round(value.main.temp_min)}&deg;F</td>
							</tr>
						</tbody>
					</Table>
				)
			})} </div>
		:null)
	)
}

function dayOfWeek(index){
	let day=index%7;
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	return days[day];

}

function returnTime(dt){
	let date = new Date(dt*1000);
	let day = date.getDay();
	let hour = date.getHours();
	let ampm = "am";


	if(hour>12){
		ampm="pm";
		hour= hour-12;
	}

	var time = dayOfWeek(day) + " " + hour + ampm;

	return time;
}

export default Forecast;