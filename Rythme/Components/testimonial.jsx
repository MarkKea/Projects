import React from 'react'
import { Container } from 'react-bootstrap'
import { RiDoubleQuotesR } from 'react-icons/ri'

function Testimonial() {
    return (
			<div className='wrapper bg'>
				<Container fluid>
					<div className='testimonial__wrapper text-center column10'>
						<h4 className='uptitle'>Testimonials</h4>
						<h1 className='title'>What Our Students Say</h1>

                        <div className = 'testimonial__icon'>
                            <RiDoubleQuotesR />
                        </div>

						<p className = 'testimonial__text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							vestibulum, velit vel rhoncus pellentesque, ante sapien feugiat
							augue, vel efficitur elit dui et dolor. Etiam at pellentesque
							arcu. Pellentesque vehicula purus ipsum, a placerat purus interdum
							in.
						</p>
					</div>
				</Container>
			</div>
		)
}

export default Testimonial
