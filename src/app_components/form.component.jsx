import React from 'react';
import './form.style.css';
import {Alert} from 'react-bootstrap';

const Form = (props) => {
  // console.log(props.resStatus)
  if(props.resStatus!==200 && props.resStatus!==undefined){
    return (
      <div className="container h-100">
        <form onSubmit={props.loadweather}>
          <div>{props.error ? error() : ""}</div>
          <div className="row">
            <div className="col-md-3 offset-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                autoComplete="off"
              />
            </div>
            <div className="col-md-3 mt-md-0 py-2 text-md-left ">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          </div>
          <div className='alert'>
            <Alert bsStyle="warning">
              <strong> Invalid City </strong>
            </Alert>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="container h-100">
        <form onSubmit={props.loadweather}>
          <div>{props.error ? error() : ""}</div>
          <div className="row">
            <div className="col-md-3 offset-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                autoComplete="off"
              />
            </div>
            <div className="col-md-3 mt-md-0 py-2 text-md-left ">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};
  
  const error = (props) => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Please Enter City and Country...!
      </div>
    );
  };

export default Form;