import React from 'react'
import Image from 'next/image'

import { workList } from '../data/links'


const Work = () => {
    return (
        <div className='wrapper'>
            <h2 className='title'>Work Experience</h2>

            <div className="workList">
                {workList.map((item, index) =>
                    <div key={index} className="workListItem">
                        <h2 className='workListText'>{item.year}</h2>

                        <div className='workListContent'>
                            <div className="workListImage">
                                <Image src={item.image} width={20} height={20}/>
                            </div>

                            <div>
                                <h2 className='workListTitle'>{item.company}</h2>
                                <p className='workListText'>{item.jobTitle}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Work