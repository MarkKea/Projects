import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Learn() {
    const ArrayOfLearns = [
        {
            id: 1,
            title: 'User',
            number: '20K'
        },
        {
            id: 2,
            title: 'Experience',
            number: '2004'
        },
        {
            id: 3,
            title: 'Expert Teacher',
            number: '100+'
        }
    ]

    return (
			<div className='wrapper bg'>
				<Container>
					<div className='learn__wrapper text-center column10'>
						<h4 className='uptitle'>Why Rythme</h4>
						<h1 className='title'>
							Learn The Music From The Core & Become Mastery
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
							porttitor sem quis elit imperdiet euismod. Maecenas dapibus orci
							sed justo rutrum vulputate. Vestibulum eu dui ut massa scelerisque
							pharetra nec non ipsum. Maecenas lacinia id arcu eget cursus. Duis
							interdum viverra lorem blandit ultricies.
						</p>
					</div>

					<Row className='g-3'>
						{ArrayOfLearns.map(ArrayOfLearn => (
							<Col lg='4' md='6' sm='12'>
								<div className='learn__item column10'>
									<h3 className='learn__title'>{ArrayOfLearn.title}</h3>
									<h4 className='learn__number'>{ArrayOfLearn.number}</h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
										elit tellus, luctus nec ullamcorper mattis.
									</p>
								</div>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		)
}

export default Learn
