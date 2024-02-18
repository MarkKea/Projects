import React from 'react'

import { FaUser } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'
import { FaFlag } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { FaBell } from 'react-icons/fa'

function RightNavbar() {
    const ArraysOfRightNavbar = [
			{
				id: 1,
				icon: (
					<i>
						<FaMoon />
					</i>
				),
			},
			{
				id: 2,
				icon: (
					<i>
						<FaFlag />
					</i>
				),
			},
			{
				id: 3,
				icon: (
					<i>
						<MdMessage />
					</i>
				),
			},
			{
				id: 4,
				icon: (
					<i>
						<FaBell />
					</i>
				),
			},
			{
				id: 5,
				icon: (
					<i>
						<FaUser />
					</i>
				),
			},
		]

    return (
			<div className='navi__content'>
				{ArraysOfRightNavbar.map(ArrayOfRightNavbar => (
					<div key={ArrayOfRightNavbar.id} className='navi__item'>
						<i>{ArrayOfRightNavbar.icon}</i>
					</div>
				))}
			</div>
		)
}

export default RightNavbar
