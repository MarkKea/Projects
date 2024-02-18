import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosTime } from 'react-icons/io'
import { FaRegMap } from 'react-icons/fa'
import { BsBoxArrowInUpRight } from 'react-icons/bs'

function Event() {
    const ArrayOfEvents = [
        {
            id: 1,
            date: '25 May',
            title: 'Music Festival 1'
        },
        {
            id: 1,
            date: '16 Aug',
            title: 'Music Festival 2'
        },
        {
            id: 1,
            date: '29 Sept',
            title: 'Music Festival 3'
        }
    ]

    return (
			<div className='wrapper bg'>
				<Container fluid>
					<div className='text-center'>
						<h4 className='uptitle'>Our Event</h4>
						<h1 className='title'>Upcoming Event</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
							tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
						</p>
					</div>

					<div className='item__wrapper'>
						{ArrayOfEvents.map(ArrayOfEvent => (
							<div className='event__item darkbg' key={ArrayOfEvent.id}>
								<Row className = 'g-2'>
									<Col lg='2' md='2' sm='12'>
										<div className='event__date'>{ArrayOfEvent.date}</div>
									</Col>

									<Col lg='6' md='6' sm='12'>
										<div className='column10'>
											<h5 className='fs875'>{ArrayOfEvent.title}</h5>

											<div className='event__info'>
												<div className='event__info__item'>
													<i><IoIosTime /></i>
													<span>9:00 AM</span>
												</div>

												<div className='event__info__item'>
													<i><FaRegMap /></i>
													<span>Pekanbaru, Riau</span>
												</div>
											</div>

											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinardapibus leo.</p>
										</div>
									</Col>

									<Col lg='4' md='4' sm='12'>
										<div className = 'event__reply'>
											<a className='event__reply__item' href='#'>
												<i><BsBoxArrowInUpRight /></i>
											</a>
										</div>
									</Col>
								</Row>
							</div>
						))}
					</div>
				</Container>
			</div>
		)
}

export default Event
