import React from 'react'

import { FaUser } from 'react-icons/fa'
import { FaFileAlt } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

function UserAndPages() {
    const ArrayOfUserAndPages = [
        {
            id: 1,
            link: 'users.html',
            icon: <i><FaUser /></i>,
            title: 'Users'
        },
        {
            id: 2,
            link: 'pages.html',
            icon: <i><FaFileAlt /></i>,
            title: 'Pages'
        },
        {
            id: 3,
            link: 'authentication.html',
            icon: <i><FaLock /></i>,
            title: 'Authentication'
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
