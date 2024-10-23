'use client'

import React, { useContext } from 'react'
import Link from 'next/link'
import { ActiveContext, ShowContext, SwitcherContext } from '@/app/layout'
import { links } from '../data/links'
import { LayoutPanelLeft, Moon, Sun, AlignJustify } from 'lucide-react'

const Header = () => {
    const [show, setShow] = useContext(ShowContext)
    const [switcher, setSwitcher] = useContext(SwitcherContext)
    const [active, setActive] = useContext(ActiveContext)

    return (
        <header className='header wrapper'>
            <h2 className="title"><LayoutPanelLeft /> Bento<span>Folio</span></h2>

            <div className='headerList'>
                {links.map((item, index) => 
                    <Link 
                        key={index}
                        href={item.href} 
                        className={active === item.title ? 'activeNavItem navItem' : 'navItem'} 
                        onClick={() => setActive(item.title)}
                    >
                        {item.icon} {item.title}
                    </Link>
                )}
            </div>

            <div className="headerList">
                <p className='headerSwitcher' onClick={() => setSwitcher(!switcher)}>
                    {switcher ? <Moon size={24}/> : <Sun size={24}/>}
                </p>

                <Link href='/contact'><button className="button darkButton">Let's Talk</button></Link>
            </div>

            <div className='headerBurger' onClick={() => setShow(!show)}>
                <AlignJustify size={24} />
            </div>
        </header>
    )
}

export default Header