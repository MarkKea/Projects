import React from 'react'
import { ExpertList } from '../data/links'
import Image from 'next/image'

const Expert = () => {
    return (
        <div className='wrapper my-2'>
            <h2 className="title">My Expert Area</h2>

            <div className="row g-3">
                {ExpertList.map((item, index) =>
                    <div key={index} className="col-xl-4 col-md-4 col-sm-6">
                        <div>
                            <div className="expertIcon">
                                <Image src={item.image} width={32} height={32}/>
                            </div>

                            <h3 className='expertTitle'>{item.title}</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Expert