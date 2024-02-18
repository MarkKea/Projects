import React, { useState } from 'react'
import './aside.scss'

import Apps from './Components/Apps'
import UserInterface from './Components/UserInterface'
import TablesAndForms from './Components/TableAndForms'
import UserAndPages from './Components/UserAndPages'
import Supports from './Components/Supports'

import { FaArrowCircleLeft } from 'react-icons/fa'
import Wrapper from '../wrapper'

function Aside() {
	const [hide, setHide] = useState(false)

    return (
			<div className={hide ? 'hide__aside' : 'aside'}>
				<div className='aside__header'>
					<h2 className='aside__title'>Vristo</h2>

					<Wrapper
						icon={<FaArrowCircleLeft />}
						setStart={setHide}
						start={hide}
					/>
				</div>

				<Apps />
				<UserInterface />
				<TablesAndForms />
				<UserAndPages />
				<Supports />
			</div>
		)
}

export default Aside
