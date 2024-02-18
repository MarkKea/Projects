import React from 'react'

import { FaFolderOpen } from 'react-icons/fa'

function Supports() {
    const ArrayOfSupports = [
        {
            id: 1,
            link: 'documentation.html',
            icon: <i><FaFolderOpen /></i>,
            title: 'Documentation'
        }
    ]

	return (
		<>
			<div className='aside__header'>
				<h2 className='aside__title'>Supports</h2>
			</div>

			<ul>
				{ArrayOfSupports.map(ArrayOfSupport => (
					<li key={ArrayOfSupport.id}>
						<a className='aside__item' href={ArrayOfSupport.link}>
							{ArrayOfSupport.icon}
							<p>{ArrayOfSupport.title}</p>
						</a>
					</li>
				))}
			</ul>
		</>
	)
}

export default Supports
