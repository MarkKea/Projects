'use client'

import { HideContext } from '@/app/page'
import React, { useContext } from 'react'
import Products from '../ui/products'

const Main = () => {
    const [hide] = useContext(HideContext)

    return (
        <div className='main'>
            <Products />
        </div>
    )
}

export default Main