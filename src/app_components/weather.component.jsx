import React from 'react';

const Weather = (props) => {
    return(
        <div className='container'>
            <div className='cards pt-4'>
                <h1 className='py-4'>{props.date}</h1>
                <h1>{props.city}</h1>
                <h5 className='py-4'>
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                {props.temp ? <h1 className='py-2'>{props.temp}&deg;F</h1> : null}
                {/*shows the min and max temps*/}
                {minMaxTemp(props.temp_max, props.temp_min)}
                <h4 className='py-3'>{props.description}</h4>
            </div>
        </div>
    );
};

function minMaxTemp(max,min){
    if(min && max){
        return(
            <h3>
            <span className='px-4'>High: {max}&deg;F</span>
            <span className='px-4'>Low: {min}&deg;F</span>
            </h3>
        );
    }
}

export default Weather;