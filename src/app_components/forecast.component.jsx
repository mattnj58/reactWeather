import React from 'react';
import PropsTypes from 'prop-types';

const Forecast = (props) =>{
    console.log(props.forecast)
    // return props.map(item => (
    //     <h3>{item.main.temp}</h3>
    // ));

    return(
        <div className='container text-light style = {{height: "100vh"}}'>
            <div className="day">
                {/* shows the forecast for the next 5 days */}
                {/* <h4 className='py-3'>{props.forecast[0].}</h4> */}
                
                {props.forecast ? <h1 className='py-2'>{this.props.forecast[0].main.temp}&deg;F</h1> : null}
            </div>
        </div>
    );
} 

Forecast.propsTypes = {
    forecast: PropsTypes.number
}


export default Forecast;