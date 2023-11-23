import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Flats() {
  const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    
  const [signUpCreds, setSignUpCreds] = useState({
    id:"",
    userName:"",
    email:"",
    mobileNumber:"",
    address:"",
    city:"",
    state:"",
    zipCode:"",
    typeOfWork:"",
    startDate:"",
    duration:"",
});
const email = signUpCreds.email;
const userName = signUpCreds.userName;
const mobileNumber = signUpCreds.mobileNumber;
const address = signUpCreds.address;
const city = signUpCreds.city;
const state = signUpCreds.state;
const zipCode = signUpCreds.zipCode;
const typeOfWork = signUpCreds.typeOfWork;  
const startDate = signUpCreds.startDate;
const duration = signUpCreds.duration;



const handleChange = (field, value) => {
  setSignUpCreds((prevSignUpCreds) => ({...prevSignUpCreds, [field]: value}));
}

const validateUserName = (userName) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(userName);
}

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const validateMobileNumber = (mobileNumber) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(mobileNumber);
}

const validateAddress = (address) => {
  const regex = /^[a-zA-Z0-9\s,'-]*$/;
  return regex.test(address);
}

const validateCity = (city) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(city);
}

const validateState = (state) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(state);
}

const validateZipCode = (zipCode) => {
  const regex = /^[0-9]{6}$/;
  return regex.test(zipCode);
}

const validateTypeOfWork = (typeOfWork) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(typeOfWork);
}

const validateStartDate = (startDate) => {
  const regex = /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/;
  return regex.test(startDate);
}

const validateDuration = (duration) => {
  const regex = /^[0-9]{2}$/;
  return regex.test(duration);
}
const handleSubmit = (e) => {
  e.preventDefault();
  if (userName === '' || email === '' || mobileNumber === '' || address === '' || city === '' || state === '' || zipCode === '' || typeOfWork === '' || startDate === '' || duration) {
      setError(true);
  } else {
      setSubmitted(true);
      setError(false);
  }
}
  console.log(signUpCreds);
  alert("Your details have been submitted successfully");



  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
            </div>

            <p>Please login to your account</p>

            <MDBInput wrapperClass='mb-4' label='userName' id='form2' type='text' value={userName}
            onChange={(e) => handleChange("userName", e.target.value)} />
            {!validateUserName(userName) && userName && <p style={{color: 'red'}}>User name must only contain letters</p>}

            
            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'
            onChange={(e) => handleChange("email", e.target.value)} />
          {!validateEmail(email) && email && <p style={{color: 'red'}}>Please enter a valid email</p>}

            <MDBInput wrapperClass='mb-4' label='Mobile_Number' id='form2' type='number' value={mobileNumber}
             onChange={(e) => handleChange("mobileNumber", e.target.value)}/>
             {!validateMobileNumber(mobileNumber) && mobileNumber && <p style={{color: 'red'}}>Please enter a valid mobile number</p>}


            <MDBInput wrapperClass='mb-4' label='Address' id='form2' type='text' value={address}
            onChange={(e) => handleChange("address", e.target.value)}/>
            {!validateAddress(address) && address && <p style={{color: 'red'}}>Please enter a valid address</p>}

            
            <MDBInput wrapperClass='mb-4' label='City' id='form2' type='text' value={city}
            onChange={(e) => handleChange("city", e.target.value)}/>
            {!validateCity(city) && city && <p style={{color: 'red'}}>Please enter a Correct city</p>}

            <MDBInput wrapperClass='mb-4' label='State' id='form2' type='text' value={state}
            onChange={(e) => handleChange("state", e.target.value)}/>
            {!validateState(state) && state && <p style={{color: 'red'}}>Please enter a Correct state</p>}

            <MDBInput wrapperClass='mb-4' label='Zip_Code' id='form2' type='number' value={zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}/>
            {!validateZipCode(zipCode) && zipCode && <p style={{color: 'red'}}>Please enter a Correct zip code</p>}

            <MDBInput wrapperClass='mb-4' label='Type_of_work' id='form2' type='text' value={typeOfWork}
            onChange={(e) => handleChange("typeOfWork", e.target.value)}/>
            {!validateTypeOfWork(typeOfWork) && typeOfWork && <p style={{color: 'red'}}>Please enter a Correct type of work</p>}

            <MDBInput wrapperClass='mb-4' label='start_Date' id='form2' type='date' value={startDate}
            onChange={(e) => handleChange("startDate", e.target.value)}/>
            {!validateStartDate(startDate) && startDate && <p style={{color: 'red'}}>Please enter a Correct start date</p>}

            <MDBInput wrapperClass='mb-4' label='Duration' id='form2' type='numbers' value={duration}
            onChange={(e) => handleChange("duration", e.target.value)}/>
            {!validateDuration(duration) && duration && <p style={{color: 'red'}}>Please enter a Correct duration</p>}


            <div className="text-center pt-1 mb-5 pb-1">
            <Link to="/usercomponent">
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' disabled={!userName || !email || !mobileNumber || !address || !city || !state || !zipCode || !typeOfWork || !startDate || !duration}
            onClick={handleSubmit}
            >Submit</MDBBtn>
            </Link>
            </div>

            

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
          <image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwWnlYE4L8uyEWsF4UhLT2PN5ruPVUn5ivCBhgFhGnQ&s"/>
            
            <div className="text-black px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Flats;
