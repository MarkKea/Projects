import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'

function About() {
	return (
		<div className='about__wrapper'>
			<div>
				<img src='' className='w-100 h-100' />
			</div>

			<div className='about__content'>
				<h3 className='title'>ABOUT US</h3>
				<p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
			</div>

			<div className='icons'>
				<div className='icon icon1'><FaFacebook /></div>
				<div className='icon icon2'><FaXTwitter /></div>
				<div className='icon icon3'><FaYoutube /></div>
				<div className='icon icon4'><FaInstagram /></div>
				<div className='icon icon5'><FaPinterest /></div>
			</div>
		</div>
	)
}

export default About
