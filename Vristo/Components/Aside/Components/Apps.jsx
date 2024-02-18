import React from 'react'

import { FaMessage } from 'react-icons/fa6'
import { FaMailBulk } from 'react-icons/fa'
import { LuListTodo } from 'react-icons/lu'
import { FaNotesMedical } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'

function Apps() {
    const ArrayOfApps = [
        {
            id: 1,
            link: 'chat.html',
            icon: <i><FaMessage /></i>,
            title: 'Chat'
        },
        {
            id: 2,
            link: 'mailbox.html',
            icon: <i><FaMailBulk /></i>,
            title: 'Mailbox'
        },
        {
            id: 3,
            link: 'todolist.html',
            icon: <i><LuListTodo /></i>,
            title: 'Todo List'
        },
        {
            id: 4,
            link: 'scrumboard.html',
            icon: <i><FaNotesMedical /></i>,
            title: 'Scrumboard'
        },
        {
            id: 5,
            link: 'notes.html',
            icon: <i><FaBook /></i>,
            title: 'Notes'
        },
        {
            id: 6,
            link: 'contacts.html',
            icon: <i><FaLocationDot /></i>,
            title: 'Contacts'
        },
        {
            id: 7,
            link: 'invoice.html',
            icon: <i><FaFileInvoiceDollar /></i>,
            title: 'Invoice'
        },
        {
            id: 8,
            link: 'calendar.html',
            icon: <i><FaCalendar /></i>,
            title: 'Calendar'
        }
    ]

	return (
		<>
			<div className='aside__header'>
				<h2 className='aside__title'>Apps</h2>
			</div>

			<ul>
				{ArrayOfApps.map(ArrayOfApp => (
					<li key={ArrayOfApp.id}>
						<a className='aside__item' href={ArrayOfApp.link}>
							{ArrayOfApp.icon}
							<p>{ArrayOfApp.title}</p>
						</a>
					</li>
				))}
			</ul>
		</>
	)
}

export default Apps
