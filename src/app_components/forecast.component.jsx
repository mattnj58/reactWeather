import React from 'react';
import './forecast.style.css'

/** Dependencies*/
import "bootstrap/dist/css/bootstrap.min.css";
import Collapsible from 'react-collapsible';
import { ClipLoader } from 'react-spinners';

const Forecast = (props) =>{
	let forecast=props.forecast;
	return (
		(forecast ? 
			<div>
			{forecast.map((value, index) => {

				let iconUrl = `http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;

				return(
					<Collapsible className='Collapsible' trigger={`${dayOfWeek(value.dt)}`} >
						<div className='Collapsible_contentInner'>
							<img src={iconUrl} width="150" height="150" alt="Weather Icon"/>
							<h3>{Math.round(value.temp.day)}&deg;F</h3>
							{minMaxTemp(value.temp.max, value.temp.min)}
							<h4>{value.weather[0].description.toUpperCase()}</h4>
						</div>
					</Collapsible>
				)
			})}
			</div>
		:<div>
			<ClipLoader/>
		</div>)
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

function minMaxTemp(max,min){
    if(max && min){
        return(
			<div>
                <h5 width='50%' margin="auto">High: {Math.round(max)}&deg;F</h5>
                <h5 width="50%" margin="auto">Low: {Math.round(min)}&deg;F</h5>
			</div>
        );
    }
}


export default Forecast;