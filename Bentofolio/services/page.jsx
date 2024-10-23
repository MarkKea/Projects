import React from 'react'

import Header from '@/components/shared/header'
import Aside from '@/components/shared/aside'
import Footer from '@/components/shared/footer'
import Info from '@/components/shared/info'

import { service } from '@/components/data/links'

import ServiceItem from '@/components/ui/serviceItem'
import ServiceImage from '@/components/photos/serviceImage.jpg'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='container-fluid my-2'>
        <Header />
        <Aside />

        <div className='row g-2 my-2'>
            <div className='col-lg-4 col-md-12'><Info /></div>

            <div className='col-lg-8 col-md-12'>
              <div className="wrapper">
                <h2 className="title">Services I <span>Offered</span></h2>
                <p className='text mb-2'>Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert <span>Product Design and Development</span> Services!</p>

                <div className="row g-2 mb-2">
                  {service.map((item, index) =>
                    <div key={index} className='col-lg-3 col-md-4 col-sm-6'>
                        <ServiceItem title={item.title} image={item.image}/>
                    </div>
                  )}
                </div>

                <div className="imageContainer">
                  <Image src={ServiceImage} className='w-100 h-100'/>
                </div>
              </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Services