import './filterProducts.scss'

function FilterProducts(){
    const ArrayOfFilterProducts = [
			{
				id: 1,
				label: 'Show All',
			},
			{
				id: 2,
				label: '4 Star and higher',
			},
			{
				id: 3,
				label: '3 Star and higher',
			},
			{
				id: 4,
				label: '2 Star and higher',
			},
			{
				id: 5,
				label: '1 Star and higher',
			},
		]
    const ArrayOfFilterProductsOnMap = ArrayOfFilterProducts.map(
			ArrayOfFilterProduct => (
				<div key={ArrayOfFilterProduct.id} className='sidebar__list__element'>
					<input name='radio' type='radio' />
					<label className='sidebar__list__label'>
						{ArrayOfFilterProduct.label}
					</label>
				</div>
			)
		)

    return (
			<div className='sidebar__wrapper'>
				<h4 className='sidebar__title'>Filter Products</h4>

				<ul className='sidebar__list'>{ArrayOfFilterProductsOnMap}</ul>
			</div>
		)
}

export default FilterProducts