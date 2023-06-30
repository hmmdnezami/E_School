import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SchoolMap from "./SchoolMap";
import SchoolForm from "./SchoolForm";
import Footer from "./Footer";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Container>
          <Row style={{ margin: "100px" }}>
            <Col xs={7}>
              <SchoolMap />
            </Col>
            <Col>
              <SchoolForm />
            </Col>
          </Row>

          <div>
            <p>
              CUSTOMER SUPPORT
              <br />
              Feel free to contact us on support@schoolsindia.com for further
              assistance or suggestions. For immediate assistance on your
              business enquiries please send us an email on
              sales@schoolsindia.com
            </p>
            <p>
              REGISTERED OFFICE
              <br />
              240, Suganamore, Patna-800002 <br />
              Bihar, INDIA <br />
              044-24511099 <br />
              skss@schoolsindia.com
            </p>
          </div>
        </Container>
        <Footer />
      </>
    );
  } 
}
