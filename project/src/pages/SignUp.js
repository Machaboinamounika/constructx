
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import APIService from '../Component/APIService';

function SignUp() {
    const [signUpCreds, setSignUpCreds] = useState({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const firstName = signUpCreds.firstName;
    const lastName = signUpCreds.lastName;
    const email = signUpCreds.email;
    const password = signUpCreds.password;
    const confirmPassword = signUpCreds.confirmPassword;


    const handleChange = (field, value) => {
        setSignUpCreds((prevSignUpCreds) => ({...prevSignUpCreds, [field]: value}));
    }

    const validateFirstName = (firstName) => {
        const regex = /^[a-zA-Z]+$/;
        return regex.test(firstName);
      }
    
      const validateLastName = (lastName) => {
        const regex = /^[a-zA-Z]+$/;
        return regex.test(lastName);
      }
           
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }

    const validatePassword = (password) => {
        // Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return regex.test(password);
      }
      
    const validateConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
      }


      const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
        APIService.saveSignUpCreds(signUpCreds).then((response) => {
            console.log(response);
            alert('Your registration is successful');
        })
        .catch((error) => {
            console.log(error);
        });


      }
    
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '700px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>

          <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' value={firstName} 
          onChange={(e) => handleChange("firstName", e.target.value)} />
          {!validateFirstName(firstName) && firstName && <p style={{color: 'red'}}>First name must only contain letters</p>}

          <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' value={lastName} 
          onChange={(e) => handleChange("lastName", e.target.value)}  />
          {!validateLastName(lastName) && lastName && <p style={{color: 'red'}}>Last name must only contain letters</p>}

          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form3' type='email' value={email} 
          onChange={(e) => handleChange("email", e.target.value)} />
          {!validateEmail(email) && email && <p style={{color: 'red'}}>Please enter a valid email</p>}

          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4'  value={password} 
          onChange={(e) => handleChange("password", e.target.value)} />
          {!validatePassword(password) && password && <p style={{color: 'red'}}>Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number</p>}

          <MDBInput wrapperClass='mb-4' label='Confirm password' size='lg' id='form5' type='password' value={confirmPassword} 
          onChange={(e) => handleChange("confirmPassword", e.target.value)}  />
          {!validateConfirmPassword(password, confirmPassword) && confirmPassword && <p style={{color: 'red'}}>Passwords do not match</p>}

          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          
          
           <Link to="/usercomponent">
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' disabled={!firstName || !lastName || !email || !password || !confirmPassword}
          onClick={handleSubmit}
          >Register</MDBBtn>
          </Link>

          <p class="text-center text-muted mt-5 mb-0">Have already an account? <Link to = "/login"><a href="#!" class="fw-bold text-body"><u>Login here</u></a></Link></p>
          </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;



