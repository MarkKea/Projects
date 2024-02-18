import React from 'react'

import Menu from './menu'
import Shopping from './shopping'
import Notes from './notes'
import Message from './message'

function LeftNavbar() {
    return (
			<div className='navi__content'>
				<Menu />
                <Shopping />
                <Notes />
                <Message />

				<input className='navi__input' placeholder='Search...' />
			</div>
		)
}

export default LeftNavbar
