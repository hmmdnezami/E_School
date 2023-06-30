import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css' ; 
import 'ag-grid-community/styles/ag-theme-alpine.css'


const columnDefs  = [
    {headerName : 'Subject', field : "subject"}, 
    {headerName : 'Teacher', field : "teacher"},
    {headerName : 'Date', field: "date"}
]

export default class Dashboard extends Component {

    constructor() {
        super() ;
        this.state = {
            rowData : [] , 
            defaultColDef : {
              sortable : true, 
              flex : 1, 
              minWidth : 100, 
              resizable : true 
            }
        }
    }


  render() {
    return (
      <>
        <Container style={{ margin: "50px" }}>
          <table>
            <th>
              {/* <Card style={{ width: "75%", height: "200px" }}>
                <Card.Body>
                  <Card.Title>Upcoming Discussions</Card.Title>
                  <Card.Text style={{ fontWeight: "lighter" }}> */}
                   <div className='ag-theme-alpine' style={{height : '250px', width : '400px', margin: '60px'}}>
                    <AgGridReact
                    columnDefs  = {columnDefs}
                    rowData = {this.state.rowData}
                    defaultColDef={this.state.defaultColDef}
                    />
                   </div>
                  {/* </Card.Text>
                </Card.Body>
              </Card> */}
            </th>
            <th></th>
            <th>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    src="https://e7.pngegg.com/pngimages/739/393/png-clipart-%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E3%83%BB%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3-debate-%E3%81%84%E3%82%89%E3%81%99%E3%81%A8%E3%82%84-student-%E8%A8%8E%E8%AB%96-group-discussion-child-photography-thumbnail.png"
                    rounded
                  />
                </Col>
              </Row>
            </th>
          </table>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <table style={{ margin: "100px" }}>
            <th>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    src="https://media.istockphoto.com/id/1253460188/vector/students-write-a-test-exam-in-a-beautiful-classroom.jpg?s=612x612&w=0&k=20&c=BQLQRtKi9y1fnaqZFz7fPPQ-DyrwO8EP1G85qBj2s1g="
                    style={{width : '300%'}}
                    rounded
                  />
                </Col>
              </Row>
            </th>
            <th></th>
            
            <th>
            <div className='ag-theme-alpine' style={{height : '250px', width : '400px', margin: '60px'}}>
                    <AgGridReact
                    columnDefs  = {columnDefs}
                    rowData = {this.state.rowData}
                    defaultColDef={this.state.defaultColDef}
                    />
                   </div>
            </th>
          </table>
        </Container>
      </>
    );
  }
}
