import React from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaDatabase } from 'react-icons/fa'
import { FaWpforms } from 'react-icons/fa'

function TableAndForms() {
    const ArrayOfTableAndForms = [
        {
            id: 1,
            link: 'tables.html',
            icon: <i><GiHamburgerMenu /></i>,
            title: 'Tables'
        },
        {
            id: 2,
            link: 'datatables.html',
            icon: <i><FaDatabase /></i>,
            title: 'Data Tables'
        },
        {
            id: 3,
            link: 'forms.html',
            icon: <i><FaWpforms /></i>,
            title: 'Forms'
        }
    ]

	return (
		<>
			<div className='aside__header'>
				<h2 className='aside__title'>Table and Forms</h2>
			</div>

			<ul>
				{ArrayOfTableAndForms.map(ArrayOfTableAndForm => (
					<li key={ArrayOfTableAndForm.id}>
						<a className='aside__item' href={ArrayOfTableAndForm.link}>
							{ArrayOfTableAndForm.icon}
							<p>{ArrayOfTableAndForm.title}</p>
						</a>
					</li>
				))}
			</ul>
		</>
	)
}

export default TableAndForms
