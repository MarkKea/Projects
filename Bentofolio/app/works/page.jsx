import Aside from '@/components/shared/aside'
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import Info from '@/components/shared/info'
import React from 'react'

const Works = () => {
  return (
    <div className='container-fluid my-2'>
        <Header />
        <Aside />

        <div className='row g-2 my-2'>
            <div className='col-lg-4 col-md-12'><Info /></div>
            <div className='col-lg-8 col-md-12'>
              <div className='wrapper'>
                <h2 className="title">Check Out My Latest <span>Projects</span></h2>
                <p className="text">I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
              </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Works