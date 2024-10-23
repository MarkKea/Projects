import Image from 'next/image'
import React from 'react'

import User from '../photos/user.webp'
import { PhoneOutgoing, Copy } from 'lucide-react'
import Link from 'next/link'
import { socialLinks } from '../data/links'

const Info = () => {
    return (
        <div className='wrapper'>
            <div className='infoWrapper'>
                <div className='imageContainer'>
                    <Image src={User} className='w-100 h-100'/>
                </div>
                
                <h2 className='title'>Seitmyrza Nurasyl 👋</h2>
                <p className='text'>A Passionate <span>Full Stack Developer</span> 🖥️ & <span>Product Designer</span> having <span>12 years</span> of Experiences over 24+ Country Worldwide.</p>

                <div className="d-flex">
                    <button className="button blueButton"><PhoneOutgoing /> Book a Call</button>
                    <button className="button whiteButton mx-2"><Copy /> Copy Email</button>
                </div>

                <div className="infoSocial">
                    {socialLinks.map((item, index) =>
                        <div key={index} className="infoSocialItem">
                            <Link className='infoSocialLink' href={item.href}>{item.icon}</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Info