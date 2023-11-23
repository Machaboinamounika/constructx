import React from 'react';
import { Link } from 'react-router-dom';
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem, MDBTextArea, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '120vh', margin:"50px" }}>
      <MDBCard style={{ padding: '20px', margin: '350px', width:"80%", height:"100%" }}>
        <MDBCardBody className='mb-2'>
          <MDBValidation noValidate id='form' className='text-start'>
            <h2 className='mb-6' style={{color:"royalblue"}}>Contact us</h2>
            <h3 className='mb-2'>How Can We Help You?</h3>
            <p className='mb-5'>Feel free to contact us if you have any questions, suggestions or any kind of feedback</p>


            <MDBValidationItem invalid feedback='Please provide your name.'>
              <MDBInput label='Name' v-model='name' wrapperClass='mb-5' style={{ height: '30px' }} required />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback='Please provide your email.'>
              <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-5' style={{ height: '30px' }} required />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback='Please provide mail subject.'>
              <MDBInput label='Subject' v-model='subject' wrapperClass='mb-5' required />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback='Please provide a message text.'>
              <MDBTextArea wrapperClass='mb-5' label='Message' style={{ height:"200px"}} required />
            </MDBValidationItem>

            <MDBValidationItem feedback=''>
              <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' /> 
              <Link to = "/usercomponent"> 
              <MDBBtn type='submit' color='primary' block className='my-3'>
                Send
              </MDBBtn>
              </Link>
            </MDBValidationItem>
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}