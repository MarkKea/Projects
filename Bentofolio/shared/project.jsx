import React from 'react'

import Project1 from '../photos/project1.png'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
    return (
        <div className='wrapper'>
            <div className="wrapperHeader">
                <h2 className='title'>Recent Projects</h2>
                <Link className='text' href="/works">All Project <i class="arrow right"></i></Link>
            </div>

            <div className='projectImage'>
                <Image src={Project1} className='img-fluid w-100'/>
            </div>
        </div>
    )
}

export default Project