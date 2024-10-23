import React from 'react';
import Header from '@/components/shared/header';
import Aside from '@/components/shared/aside';
import Info from '@/components/shared/info';
import Work from '@/components/shared/work';
import Expert from '@/components/shared/expert';
import Project from '@/components/shared/project';
import Services from '@/components/shared/services';
import Footer from '@/components/shared/footer';

export default function Home() {
  return (
    <div className='container-fluid my-2'>
      <Header />
      <Aside />

      <div className='row g-2 my-2'>
        <div className='col-lg-4 col-md-12'><Info /></div>
        <div className='col-lg-4 col-md-12'><Work /><Expert /></div>
        <div className='col-lg-4 col-md-12'><Project /></div>
        <div className='col-lg-8 col-md-12'><Services /> </div>
      </div>   

      <Footer />
    </div>

  );
}
