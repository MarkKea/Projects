import React from 'react'

import { FaCube } from 'react-icons/fa'
import { FaBoltLightning } from 'react-icons/fa6'
import { FaChartPie } from 'react-icons/fa'
import { MdOutlineWidgets } from 'react-icons/md'
import { MdAlternateEmail } from 'react-icons/md'
import { IoMdResize } from 'react-icons/io'

function UserAndPages() {
    const ArrayOfUserAndPages = [
        {
            id: 1,
            link: 'components.html',
            icon: <i><FaCube /></i>,
            title: 'Components'
        },
        {
            id: 2,
            link: 'elements.html',
            icon: <i><FaBoltLightning /></i>,
            title: 'Elements'
        },
        {
            id: 3,
            link: 'charts.html',
            icon: <i><FaChartPie /></i>,
            title: 'Charts'
        },
        {
            id: 4,
            link: 'widgets.html',
            icon: <i><MdOutlineWidgets /></i>,
            title: 'Widgets'
        },
        {
            id: 5,
            link: 'fonticons.html',
            icon: <i><MdAlternateEmail /></i>,
            title: 'Font Icons'
        },
        {
            id: 6,
            link: 'dragsnddrop.html',
            icon: <i><IoMdResize /></i>,
            title: 'Drag and Drop'
        }
    ]

	return (
		<>
			<div className='aside__header'>
				<h2 className='aside__title'>User and Pages</h2>
			</div>

			<ul>
				{ArrayOfUserAndPages.map(ArrayOfUserAndPage => (
					<li key={ArrayOfUserAndPage.id}>
						<a className='aside__item' href={ArrayOfUserAndPage.link}>
							{ArrayOfUserAndPage.icon}
							<p>{ArrayOfUserAndPage.title}</p>
						</a>
					</li>
				))}
			</ul>
		</>
	)
}

export default UserAndPages
