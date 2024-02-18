import React from 'react'
import './navbar.scss'

import LeftNavbar from './Components/LeftNavbar/LeftNavbar'
import RightNavbar from './Components/RightNavbar/RightNavbar'

function Navbar() {
	return (
		<div className='navi'>
			<LeftNavbar />
            <RightNavbar />
		</div>
	)
}

export default Navbar
