import './category.scss'

function Category(){
    return (
			<div className='sidebar__wrapper'>
				<h4 className='sidebar__title'>Category</h4>

				<ul className='sidebar__list'>
					<li className='sidebar__list__item'>All</li>
					<li className='sidebar__list__item'>Graphics & Design</li>
					<li className='sidebar__list__item'>Digital Marketing</li>
					<li className='sidebar__list__item'>Writing & Translation</li>
					<li className='sidebar__list__item'>Music & Audio</li>
					<li className='sidebar__list__item'>Video & Animation</li>
				</ul>
			</div>
		)
}

export default Category