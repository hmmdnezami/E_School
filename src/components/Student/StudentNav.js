import React, { useState, Component }from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default class StudentNav extends Component {
  render() {
    return (
      <>
        <MDBNavbar expand="lg" dark bgColor="primary">
          <MDBContainer fluid>
            <MDBNavbarBrand href="#"> ESchool </MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              // onClick={() => setShowNavColor(!showNavColor)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse show={false} navbar>
              <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
                <MDBNavbarItem className="active">
                  <MDBNavbarLink aria-current="page" href="/">
                    Dashboard
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/profile">Profile</MDBNavbarLink>
                </MDBNavbarItem>
             
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </>
    );
  }
}
