import Image from 'next/image'
import React from 'react'

const ServiceItem = ({title, image}) => {
    return (
        <div className='serviceListItem'>
            <div className="serviceImage">
                <Image src={image}/>
            </div>

            <h2 className='text text-center'>{title}</h2>
        </div>
    )
}

export default ServiceItem