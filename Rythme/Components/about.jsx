import React from 'react'
import AboutImage from './Images/about.png'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
    return (
        <div className='wrapper bg'>
			<Container fluid>
                <Row>
                    <Col lg = '6' md = '12'>
                        <div className = 'column10'>
                            <h4 className='uptitle'>About Us</h4>
                            <h1 className='title'>Grow Your Skills For Free With Rythme Academy</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                            <div className = 'about__item'>
                                <i><FaRegCircleCheck /></i>
                                <p className = 'about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>

                            <div className = 'about__item'>
                                <i><FaRegCircleCheck /></i>
                                <p className = 'about__text'>Pellentesque habitant morbi tristique senectus et netus</p>
                            </div>

                            <div><button className = 'dark__button'>Discover More</button></div>
                        </div>
                    </Col>

                    <Col lg = '6' md = '12'>
                        <img src = {AboutImage} className = 'w-100'/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
