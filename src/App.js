/**
 * Followed this tutorial
 * https://www.youtube.com/watch?v=IxuqmfO6p28&t=2s 
 * */

//Components
import React from 'react';
import Weather from './app_components/weather.component';
import Form from './app_components/form.component';
import './App.css';

/** Dependencies*/
import "weather-icons/css/weather-icons.css"; //git project from https://github.com/erikflowers/weather-icons
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Here is the api documentation for openweathermap
 * https://openweathermap.org/current
 */
const apiKey = {
  key: '7b7154eb47e573afde1536472685b7fb',
  base: 'http://api.openweathermap.org/data/2.5/'
}

/*const currentDate = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
} */

class App extends React.Component{
 constructor(){
   super();
   this.state={
     city:undefined,
     country:undefined,
     icon:undefined,
     main:undefined,
     temp:undefined,
     temp_max:undefined,
     temp_min:undefined,
     description:"",
     error:false
   }

   this.weatherIcon={
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
   }
 } 

 getWeatherIcon(icons, rangeId){
  switch(true){
    case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
  }
 }

 getWeather = async(e) => {

  e.preventDefault();

  const city = e.target.elements.city.value;
  //const country = e.target.elements.country.value;

  if(city){
    const api_call=await fetch(`${apiKey.base}weather?APPID=${apiKey.key}&q=${city},us&units=imperial`);
    const res = await api_call.json();
    console.log(res);

    

  this.setState({
    city:`${res.name}`,
    temp:Math.round(res.main.temp),
    temp_max:Math.round(res.main.temp_max),
    temp_min:Math.round(res.main.temp_min),
    description:res.weather[0].description,
    icon: this.getWeatherIcon(res.weather[0].icon),
    error:false
  });

  this.getWeatherIcon(this.weatherIcon, res.weather[0].id);
  } else {
    this.setState({error:true})
  }
}
  render(){
    return(
      <div className='App'>
        <Form loadweather={this.getWeather}/>
        <Weather 
        city={this.state.city}
        temp={this.state.temp}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}/>
      </div>
    );
  }
}

export default App;
