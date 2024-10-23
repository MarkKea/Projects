import Aside from '@/components/shared/aside'
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import Info from '@/components/shared/info'
import React from 'react'

const Contact = () => {
  return (
    <div className='container-fluid my-2'>
        <Header />
        <Aside />

        <div className='row g-2 my-2'>
            <div className='col-lg-4 col-md-12'><Info /></div>
        </div>

        <Footer />
    </div>
  )
}

export default Contact