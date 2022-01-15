import React from 'react';
import './forecast.style.css'

/** Dependencies*/
import "weather-icons/css/weather-icons.css"; //git project from https://github.com/erikflowers/weather-icons
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap/lib/Tab';
import { object } from 'prop-types';


const Forecast = (props) =>{
	let forecast=props.forecast;

	const weatherIcons={
		Thunderstorm: "wi-thunderstorm",
		Drizzle: "wi-sleet",
		Rain: "wi-storm-showers",
		Snow: "wi-snow",
		Atmosphere: "wi-fog",
		Clear: "wi-day-sunny",
		Clouds: "wi-day-fog"
	}

	return (

		// (this.forecast? 
		// 	<ul>
		// 	{
		// 		this.forecast.map(function(hours){
		// 			return <li>{hours.weather[0].icon}</li>
		// 		})
		// 	}
		// </ul>:null)

		(forecast ? 
			<div className='container' margin='3rem'>
			{forecast.map((value, index) => {
				let iconUrl = `http://openweathermap.org/img/wn/${value.weather[0].icon}.png`
				// getWeatherIcon(weatherIcons, value.weather[0].id);
				return (
					<Table key={index}>
						<tbody>
							<tr>
								<td align="center" width="10%">{dayOfWeek(value.dt)}</td>
								<td align="center" width="5%">{returnTime(value.dt)}</td>
								<td align='center' width="5%">
									{/* <p className={`wi ${value.icon} display-1`}></p> */}
									{/* <i>{getWeatherIcons(weatherIcons,value.weather[0].icon)}</i> */}
									<img src={"https://openweathermap.org/img/wn/"+value.weather[0].icon+".png"}/> 
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

// function getWeatherIcon(icons, rangeId){
//   switch(true){
//     case rangeId >= 200 && rangeId < 232:
//         this.setState({ icon: icons.Thunderstorm });
//         break;
//       case rangeId >= 300 && rangeId <= 321:
//         this.setState({ icon: icons.Drizzle });
//         break;
//       case rangeId >= 500 && rangeId <= 521:
//         this.setState({ icon: icons.Rain });
//         break;
//       case rangeId >= 600 && rangeId <= 622:
//         this.setState({ icon: icons.Snow });
//         break;
//       case rangeId >= 701 && rangeId <= 781:
//         this.setState({ icon: icons.Atmosphere });
//         break;
//       case rangeId === 800:
//         this.setState({ icon: icons.Clear });
//         break;
//       case rangeId >= 801 && rangeId <= 804:
//         this.setState({ icon: icons.Clouds });
//         break;
//       default:
//         this.setState({ icon: icons.Clouds });
//   }
//  }

export default Forecast;