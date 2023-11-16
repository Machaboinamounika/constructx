import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function Flats() {
    
  const [signUpCreds, setSignUpCreds] = useState({
    id:"",
    userName:"",
    email:"",
    Mobile_Number:"",
    password:"",
    confirmPassword:"",
});
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

            <MDBInput wrapperClass='mb-4' label='userName' id='form2' type='text'/>
            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Mobile_Number' id='form2' type='number'/>
            <MDBInput wrapperClass='mb-4' label='Address' id='form2' type='text'/>
            <MDBInput wrapperClass='mb-4' label='City' id='form2' type='text'/>
            <MDBInput wrapperClass='mb-4' label='State' id='form2' type='text'/>
            <MDBInput wrapperClass='mb-4' label='Zip_Code' id='form2' type='number'/>
            <MDBInput wrapperClass='mb-4' label='Type_of_work' id='form2' type='text'/>
            <MDBInput wrapperClass='mb-4' label='start_Date' id='form2' type='date'/>
            <MDBInput wrapperClass='mb-4' label='Duration' id='form2' type='numbers'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Submit</MDBBtn>
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
