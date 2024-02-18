import React from 'react'

import './footer.scss'

function Footer() {
    return (
			<div className='footer'>
				<ul className='footer__nav'>
					<li className='footer__nav__item'>Privacy</li>
					<li className='footer__nav__item'>Term and Conditions</li>
					<li className='footer__nav__item'>About</li>
					<li className='footer__nav__item'>Contact Us</li>
				</ul>

				<ul className='footer__nav'>
					<li className='footer__nav__item'>
							2022 Goeveni by <span>Gambolthemes</span>. All Rights Reserved.
					</li>
				</ul>
			</div>
		)
}

export default Footer
