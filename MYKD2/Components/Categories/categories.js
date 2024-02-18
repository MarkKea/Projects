import './categories.scss'

function Categories(){

    const ArrayOfCategories = [
			{
				id: 1,
				title: 'Gaming',
				count: 11,
			},
			{
				id: 2,
				title: 'Electronic',
				count: 4,
			},
			{
				id: 3,
				title: 'Online',
				count: 21,
			},
			,
			{
				id: 4,
				title: 'Tournament',
				count: 11,
			},
			{
				id: 5,
				title: 'Controller',
				count: 2,
			},
			{
				id: 6,
				title: 'Live',
				count: 7,
			}
		]
    const ArrayOfCategoriesOnMap = ArrayOfCategories.map(ArrayOfCategory => (
			<div key = {ArrayOfCategory.id} className='categories__item'>
				<div className = 'categories__title'>
					<a>{ArrayOfCategory.title}</a>
				</div>

                <div className = 'categories__count'>
                    <span>({ArrayOfCategory.count})</span>
                </div>
			</div>
		))

    return(
        <div className = 'categories'>
            <h4 className = 'categories__header'>Categories</h4>
            {ArrayOfCategoriesOnMap}
        </div>
    )
}
export default Categories