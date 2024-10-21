'use client'

import React, { useContext, useState } from 'react'
import AsideItem from '../ui/asideItem'
import { Apps, Supports, TablesAndForms, UserAndPages, UserInterface } from '../data/links'
import { HideContext } from '@/app/page'

const Aside = () => {
    const [hide] = useContext(HideContext)

    return (
        <div className={hide ? 'hide__aside' : 'aside'}>
            <AsideItem title={'Apps'} links={Apps}/>
            <AsideItem title={'User Interface'} links={UserInterface}/>
            <AsideItem title={'Tables And Forms'} links={TablesAndForms}/>
            <AsideItem title={'User And Pages'} links={UserAndPages}/>
            <AsideItem title={'Supports'} links={Supports}/>
        </div>
    )
}

export default Aside