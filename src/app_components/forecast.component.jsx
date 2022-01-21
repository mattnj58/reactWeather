import React from 'react';
import './forecast.style.css';

/** Dependencies*/
import "bootstrap/dist/css/bootstrap.min.css";
import Collapsible from 'react-collapsible';
import { ClipLoader } from 'react-spinners';

const Forecast = (props) =>{
	let forecast=props.forecast;

	return (
		(forecast ? 
			<div>
			{forecast.map((value) => {

				let iconUrl = `http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;

				return(
					<Collapsible className='Collapsible' trigger={`${dayOfWeek(value.dt)}`} >
						<div className='Collapsible_contentInner'>
							<img src={iconUrl} width="150" height="150" alt="Weather Icon"/>
							<h5>{value.weather[0].main.toUpperCase()}</h5> 
							<h3>{Math.round(value.temp.day)}&deg;F</h3>
							{minMaxTemp(value.temp.max, value.temp.min)}
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

function minMaxTemp(max,min){
    if(max && min){
        return(
			<div>
                <h4 width='50%' margin="auto">High: {Math.round(max)}&deg;F</h4>
                <h4 width="50%" margin="auto">Low: {Math.round(min)}&deg;F</h4>
			</div>
        );
    }
}


export default Forecast;