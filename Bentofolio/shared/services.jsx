import Link from 'next/link'
import React from 'react'
import { serviceList } from '../data/links'
import Image from 'next/image'
import ServiceItem from '../ui/serviceItem'

const Services = () => {
  return (
    <div className='wrapper'>
        <div className="wrapperHeader">
            <h2 className="title">Services I Offered</h2>
            <Link className='text' href="/services">See all Projects <i class="arrow right"></i></Link>
        </div>

        <div className="serviceList">
            <div className="row g-2">
                {serviceList.map((item, index) => 
                    <div key={index} className='col-lg-3 col-md-4 col-sm-6'>
                        <ServiceItem title={item.title} image={item.image}/>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Services