import React from 'react'

import './categories.scss'

import Music from '../Images/music.png'
import Classics from '../Images/classics.png'
import Comedy from '../Images/comedy.png'
import Crafts from '../Images/crafts.png'
import Dance from '../Images/dance.png'
import Drinks from '../Images/drinks.png'
import Fitness from '../Images/fitness.png'
import Foods from '../Images/food.png'
import Games from '../Images/games.png'
import Gardening from '../Images/gardening.png'
import Home from '../Images/home.png'
import Parties from '../Images/parties.png'
import Shopping from '../Images/shopping.png'
import Social from '../Images/social.png'
import Theatre from '../Images/theatre.png'
import TV from '../Images/tv.png'
import Visual from '../Images/visual.png'

function Categories() {
    const ArrayOfCategories = [
        {
            id: 1,
            image: Music,
            text: 'Music'
        },
        {
            id: 2,
            image: Classics,
            text: 'Classics'
        },
        {
            id: 3,
            image: Comedy,
            text: 'Comedy'
        },
        {
            id: 4, 
            image: Crafts,
            text: 'Crafts'
        },
        {
            id: 5,
            image: Dance,
            text: 'Dance'
        },
        {
            id: 6, 
            image: Drinks,
            text: 'Drinks'
        },
        {
            id: 7,
            image: Fitness,
            text: 'Fitness'
        },
        {
            id: 8,
            image: Foods,
            text: 'Foods'
        },
        {
            id: 9,
            image: Games,
            text: 'Games'
        },
        {
            id: 10,
            image: Gardening,
            text: 'Gardening'
        },
        {
            id: 11,
            image: Home,
            text: 'Home'
        },
        {
            id: 12,
            image: Parties,
            text: 'Parties'
        },
        {
            id: 13,
            image: Shopping,
            text: 'Shopping'
        },
        {
            id: 14,
            image: Social,
            text: 'Social'
        },
        {
            id: 15,
            image: Theatre,
            text: 'Theatre'
        },
        {
            id: 16,
            image: TV,
            text: 'TV and Films'
        },
        {
            id: 17,
            image: Visual,
            text: 'Visual arts'
        }
    ]

    return (
			<div className='side__wrapper'>
				<h3 className='side__title'>Categories</h3>

				<div className='category__wrapper'>
					{ArrayOfCategories.map(ArrayOfCategory => (
						<div className='side__item' key={ArrayOfCategory.id}>
							<img src={ArrayOfCategory.image} className='category__image' />
							<a href='#' className='category__text'>
								{ArrayOfCategory.text}
							</a>
						</div>
					))}
				</div>
			</div>
		)
}

export default Categories
