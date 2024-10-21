import Link from 'next/link'
import React from 'react'

const AsideItem = ({title, links}) => {
    return (
        <div className='asideItem'>
            <h2 className='asideItemTitle'>{title}</h2>

            <ul className='asideItemList'>
                {links.map((item, index) =>
                    <li className='asideItemLink' key={index}>
                        <Link className='asideItemContent' href={item.href}>
                            <span className='asideItemIcon'>{item.icon}</span>
                            {item.link}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default AsideItem