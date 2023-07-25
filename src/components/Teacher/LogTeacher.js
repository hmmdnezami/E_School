import React, { Component } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import TeacherHome from "./TeacherHome";

export default class LogTeacher extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showComponent: false, 
          page  : "null"
        };
      }

    functionClicked =()=>  {
      this.props.setPage("teacher") ; 
        console.log('Button Clicked'); 
        this.setState ({showComponent : true, page : "teacher"})
    }


  render() {
    return (
      (this.state.showComponent == false) ? (<MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkL9HeKFT15kpvFok7VZ1odmEujjfNpXFMvA&usqp=CAU"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                {/* <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div> */}

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <MDBBtn className="mb-4 px-5" color="dark" size="lg" onClick={this.functionClicked}>
                  Login
                </MDBBtn>
                {/* { this.state.showComponent && <TeacherHome/>} */}
                <a className="small text-muted" href="#!">
                  Forgot password?
                </a>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <a href="#!" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>

                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>) : (<TeacherHome page = {this.state.page}/>)
    );
  }
}
