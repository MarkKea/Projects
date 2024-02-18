import React from 'react'
import { Container } from 'react-bootstrap'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import Rythme from './Images/mainrythme.png'
import Footer from './main_footer'

function Main() {
    return (
			<>
				<div className='main'>
					<Container fluid>
						<div className='main__wrapper column10 text-center'>
							<div className='main__image'>
								<img src={Rythme} className='w-100' />
							</div>

							<h4 className='uptitle'>Welcome to Rythme music school</h4>
							<h1 className='main__title'>
								Where Words Leave Off, <span>Music Begins</span>
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
								tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
							</p>

							<div className='main__buttons'>
								<button className='dark__button'>Discover More</button>
								<button className='default__button'>Contact Us</button>
							</div>

							<div className='main__links'>
								<div className='main__icon'>
									<FaFacebook />
								</div>

								<div className='main__icon'>
									<FaTwitter />
								</div>

								<div className='main__icon'>
									<FaInstagram />
								</div>

								<div className='main__icon'>
									<FaYoutube />
								</div>
							</div>
						</div>
					</Container>
				</div>

                <Footer />
			</>
		)
}

export default Main
