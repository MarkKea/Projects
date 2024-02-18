import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

function Program() {
    const ArrayOfPrograms = [
        {
            id: 1,
            price: '$29.00',
            title: 'Preschool Classes'
        },
        {
            id: 2,
            price: '$39.00',
            title: 'Schooler Classes'
        },
        {
            id: 3,
            price: '$49.00',
            title: 'Teenager Classes'
        }
    ]

    return (
        <div className = 'wrapper'>
            <Container fluid>
                <div className='text-center'>
					<h4 className='uptitle'>Our Program</h4>
					<h1 className='title'>Grade Programs</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
				</div>

                <Row className = 'g-2'>
                    {
                        ArrayOfPrograms.map(ArrayOfProgram =>
                            <Col key = {ArrayOfProgram.id} lg = '4' md = '6' sm = '12'>
                                <div className = 'program__item darkbg column10'>
                                    <h4 className = 'program__item__cost'>{ArrayOfProgram.price} <span>/ Class</span></h4>

                                    <h6 className = 'fs11em'>{ArrayOfProgram.title}</h6>
                                    <p className = 'program__item__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>Detail here!</span></p>

                                    <div className = 'program__item__info'>
                                        <h4 className = 'program__text'>What's Included?</h4>

                                        <div className = 'program__element'>
                                            <FaCheck />
                                            <p className = 'program__text'>Lorem ipsum dolor sit amet.</p>
                                        </div>

                                        <div className = 'program__element'>
                                            <FaCheck />
                                            <p className = 'program__text'>Consectetur adipiscing elit.</p>
                                        </div>
                                    </div>

                                    <button className = 'default__button w-100'>Learn More</button>
                                </div>
                            </Col>    
                        )
                    }
                </Row>

                <div className = 'program__footer text-center darkbg'>
                    <p>Private Lesson? <span>Let's Talk</span></p>
                </div>
            </Container>
        </div>
    )
}

export default Program
