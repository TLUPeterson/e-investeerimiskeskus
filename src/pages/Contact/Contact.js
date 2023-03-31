import React from 'react';
import { useState } from "react";
import { InfoSection } from '../../components';
import { homeObjOne } from './Data';
import emailjs from '@emailjs/browser';

const initialState = {
  name: "",
  email: "",
  message: "",
};
function Products() {
  
const [{ name, email, message }, setState] = useState(initialState);
const handleChange = (e) => {
  const { name, value } = e.target;
  setState((prevState) => ({ ...prevState, [name]: value }));
};
const clearState = () => setState({ ...initialState });
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name, email, message);
  emailjs
    .sendForm("service_ec61w9g", "template_i2yn4eo", e.target, "XGRXQIRWs3PT5aaup")
    .then(
      (result) => {
        console.log(result.text);
        clearState();
      },
      (error) => {
        console.log(error.text);
      }
    );
};

  return (
    
    <div style={{backgroundColor: '#101522', display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>

      <div id="contact" style={{backgroundColor: "#101522", paddingTop: "200px", maxWidth: "90vh", paddingLeft:'50px'}} >
        <div className="container">
          <div className="column">
            <div className="row">
              <div className="section-title">
                <h2 style={{color: "white"}}>Kirjutage meile</h2>
              </div>
              <form name="sentMessage" validate='true' onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <img src={'Mail.svg'} style={{maxWidth:'700px', paddingTop: '', paddingLeft:'200px', paddingTop:'75px'}}/>
    </div>
  );
}

export default Products;