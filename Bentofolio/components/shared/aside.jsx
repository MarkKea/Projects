'use client'

import React, { useContext } from 'react'
import Link from 'next/link'
import { ActiveContext, ShowContext, SwitcherContext } from '@/app/layout'
import { links } from '../data/links'
import { LayoutPanelLeft, Moon, Sun } from 'lucide-react'

const Aside = () => {
    const [show] = useContext(ShowContext)
    const [switcher, setSwitcher] = useContext(SwitcherContext)
    const [active, setActive] = useContext(ActiveContext)

    return (
        <div className={show ? 'aside' : 'aside hideAside'}>
            <div className="asideWrapper">
                <h2 className='title'><LayoutPanelLeft /> Bento<span>Folio</span></h2>

                <div className="asideList">
                    {links.map((item, index) => 
                        <Link 
                            onClick={() => setActive(item.title)} 
                            href={item.href} 
                            className={active === item.title ? 'activeNavItem navItem' : 'navItem'} 
                            key={index}
                        >
                            {item.icon} {item.title}
                        </Link>
                    )}
                </div>

                <div className="asideInfo">
                    <p className='asideSwitcher' onClick={() => setSwitcher(!switcher)}>
                        {switcher ? <Moon size={24}/> : <Sun size={24}/>}
                        Change appearance
                    </p>

                    <Link href='/contact'><button className="button darkButton w-100">Let's Talk</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Aside