import React, { Component } from 'react'
import HeaderImage from './HeaderImage'
import { Container } from 'react-bootstrap'
import HomeAbout from './HomeAbout'
import HomeMessage from './HomeMessage'
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <>
      <div>
        <Container>
            <Container>
            <HeaderImage style ={{ margin : '15px'}}/>
            </Container>
        
        <div style={{ margin : 50}}>
            <HomeAbout/>
        </div>

        <HomeMessage/>
        <p></p>
        
        </Container>
        <Footer/>
      </div>
      </>
    )
  }
}
