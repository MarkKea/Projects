import React from 'react'
import Guitar from './Images/guitar.png'
import Vocal from './Images/vocal.png'
import Drum from './Images/drum.png'
import Piano from './Images/piano.png'
import Saxophone from './Images/saxophone.png'
import Violin from './Images/violin.png'
import Cello from './Images/cello.png'
import Composing from './Images/composing.png'
import { Col, Container, Row } from 'react-bootstrap'

function Class() {
    const ArrayOfClasses = [
        {
            id: 1,
            image: Guitar,
            title: 'Guitar'
        },
        {
            id: 2,
            image: Vocal,
            title: 'Vocal'
        },
        {
            id: 3,
            image: Drum,
            title: 'Drum'
        },
        {
            id: 4,
            image: Piano,
            title: 'Piano'
        },
        {
            id: 5,
            image: Saxophone,
            title: 'Saxophone'
        },
        {
            id: 6,
            image: Violin,
            title: 'Violin'
        },
        {
            id: 7,
            image: Cello,
            title: 'Cello'
        },
        {
            id: 8,
            image: Composing,
            title: 'Composing'
        }
    ]

    return (
			<div className='wrapper'>
				<Container fluid>
                    <div className='text-center'>
					<h4 className='uptitle'>Our Class</h4>
					<h1 className='title'>Musical Instrument</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
				</div>

				<div className='item__wrapper'>
					<Row className='g-2'>
						{ArrayOfClasses.map(ArrayOfClass => (
							<Col key={ArrayOfClass.id} lg='3' md='6' sm='12'>
								<div className='class__item darkbg'>
									<div className='class__item__image'>
										<img src={ArrayOfClass.image} className='w-100' />
									</div>

									<h5 className='fs875'>{ArrayOfClass.title}</h5>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

									<button className='default__button'>Learn More!</button>
								</div>
							</Col>
						))}
					</Row>
				</div>

				<div className='class__footer text-center'>
					<p>See More About Our Class Instrument. <span>More Instrument</span></p>
				</div>
                </Container>
			</div>
		)
}

export default Class
