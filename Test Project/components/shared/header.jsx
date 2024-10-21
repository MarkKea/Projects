'use client'

import React, { useContext, useState } from 'react'
import { AlignJustify, Calendar, SquarePen, Mail, Sun, Moon, Languages, MailSearch, Bell, User} from 'lucide-react'
import Link from 'next/link'
import { HideContext } from '@/app/page'

const Header = () => {
    const [light, setLight] = useState(false)
    const handleLight = () => setLight(!light)

    const [hide, setHide] = useContext(HideContext)

    return (
        <div className="container-fluid">
            <div className={hide ? 'header__hide' : 'header'}>
                <div className="headerFlex">
                    <Link onClick={() => setHide(!hide)} href={''}>
                        <div className="headerIcon">
                            <AlignJustify size={18} />
                        </div>
                    </Link>

                    <Link href={''}>
                        <div className="headerIcon">
                            <Calendar size={18} />
                        </div>
                    </Link>

                    <Link href={''}>
                        <div className="headerIcon">
                            <SquarePen size={18} />
                        </div>
                    </Link>

                    <Link href={''}>
                        <div className="headerIcon">
                            <Mail size={18} />
                        </div>
                    </Link>
                </div>

                <div className="headerFlex">
                    <Link href={''} onClick={handleLight}>
                        <div className="headerIcon">
                            {light ? <Sun size={18} /> : <Moon size={18} />}
                        </div>
                    </Link>

                    <Link href={''}>
                        <div className="headerIcon">
                            <Languages size={18} />
                        </div>
                    </Link>

                    <Link href={''}>
                        <div className="headerIcon">
                            <MailSearch size={18} />
                        </div>
                    </Link>

                    <Link href={''}>
                        <div className="headerIcon">
                            <Bell size={18} />
                        </div>
                    </Link>

                    <Link href={''}>
                        <div className="headerIcon">
                            <User size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header