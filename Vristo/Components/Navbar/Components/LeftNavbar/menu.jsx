import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import Wrapper from '../../../wrapper'

function Menu() {
	const [hide, setHide] = useState(false)

	return (
		<div className='navi__item'>
			<Wrapper icon={<GiHamburgerMenu />} setStart={setHide} start={hide} />
		</div>
	)
}

export default Menu
