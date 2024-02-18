import React from 'react'

import { MdOutlineGroupAdd } from 'react-icons/md'

import './people.scss'

import people1 from '../Images/people1.jpg'
import people2 from '../Images/people2.jpg'
import people3 from '../Images/people3.jpg'
import people4 from '../Images/people4.jpg'
import people5 from '../Images/people5.jpg'

function People() {
    const ArrayOfPeoples = [
        {
            id: 1,
            image: people1,
            title: 'Johnson'
        },
        {
            id: 2,
            image: people2,
            title: 'Jassica William'
        },
        {
            id: 3,
            image: people3,
            title: 'Rock'
        },
        {
            id: 4,
            image: people4,
            title: 'Davil Smith'
        },
        {
            id: 5,
            image: people5,
            title: 'Ricky Doe'
        }
    ]

    return (
			<div className='side__wrapper'>
				<h3 className='side__title'>Peoples</h3>

				{ArrayOfPeoples.map(ArrayOfPeople => (
					<div className='people__item' key={ArrayOfPeople.id}>
						<div className='people__author'>
							<div className='people__image'>
								<img src={ArrayOfPeople.image} className='w-100' />
							</div>

							<h4 className='people__title'>{ArrayOfPeople.title}</h4>
						</div>
						<button className='people__button'>
							<MdOutlineGroupAdd />
						</button>
					</div>
				))}
			</div>
		)
}

export default People
