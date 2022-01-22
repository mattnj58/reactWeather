import React from 'react';
import { ClipLoader } from 'react-spinners';

const Card = (props) => {
    let iconUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
    return(
        (props ? 
            <div margin="auto">
                <p>{returnTime(props.time)}</p>
                <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.main}/>
                <p>{Math.round(props.temp)}&deg;F</p>
            </div>
        :<div>
            <ClipLoader/>
        </div>)
    )
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

export default Card;