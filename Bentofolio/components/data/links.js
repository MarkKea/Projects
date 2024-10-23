import { House, ContactRound, Layers, BookOpen, FilePen, MessageSquareMore, Facebook, Github, Instagram, Youtube } from 'lucide-react';
import Google from '../photos/google.svg'
import Meta from '../photos/meta.svg'
import Adobe from '../photos/adobe.svg'
import Figma from '../photos/figma.svg'
import Notion from '../photos/notion.svg'
import Miro from '../photos/mico.svg'
import Framer from '../photos/framer.svg'
import Webflow from '../photos/webflow.svg'
import Zeplin from '../photos/zeplin.svg'

import Service1 from '../photos/service1.svg'
import Service2 from '../photos/service2.svg'
import Service3 from '../photos/service3.svg'
import Service4 from '../photos/service4.svg'
import Service5 from '../photos/service5.svg'
import Service6 from '../photos/service6.svg'
import Service7 from '../photos/service7.png'
import Service8 from '../photos/service8.svg'

export const links = [
    {
        title: 'Home',
        icon: <House />,
        href: '/'
    },
    {
        title: 'About',
        icon: <ContactRound />,
        href: '/about'
    },
    {
        title: 'Services',
        icon: <Layers />,
        href: '/services'
    },
    {
        title: 'Works',
        icon: <BookOpen />,
        href: '/works'
    },
    {
        title: 'Blog',
        icon: <FilePen />,
        href: '/blog'
    },
    {
        title: 'Contact',
        icon: <MessageSquareMore />,
        href: '/contact'
    }
]
export const socialLinks = [
    {
        icon: <Facebook size={24}/>,
        href: '/'
    },
    {
        icon: <Github size={24}/>,
        href: '/'
    },
    {
        icon: <Instagram size={24}/>,
        href: '/'
    },
    {
        icon: <Youtube size={24}/>,
        href: '/'
    }
]
export const workList = [
    {
        year: '2020-2021',
        image: Adobe,
        company: 'Adobe',
        jobTitle: 'Senior UI/UX Designer'
    },
    {
        year: '2021-2022',
        image: Meta,
        company: 'Meta Inc.',
        jobTitle: 'Product Designer'
    },
    {
        year: '2022-2023',
        image: Google,
        company: 'Google',
        jobTitle: 'Senior Product Designer'
    },
    {
        year: '2023-2024',
        image: Adobe,
        company: 'Adobe',
        jobTitle: 'Product Designer'
    }
]
export const ExpertList = [
    {
        title: 'Figma',
        image: Figma
    },
    {
        title: 'Notion',
        image: Notion
    },
    {
        title: 'Miro',
        image: Miro
    },
    {
        title: 'Framer',
        image: Framer
    },
    {
        title: 'Webflow',
        image: Webflow
    },
    {
        title: 'Zeplin',
        image: Zeplin
    }
]
export const serviceList = [
    {
        title: 'UI/UX Design',
        image: Service1
    },
    {
        title: 'Mobile App',
        image: Service2
    },
    {
        title: 'Product Design',
        image: Service3
    },
    {
        title: 'Branding',
        image: Service4
    }
]
export const service = [
    {
        title: 'UI/UX Design',
        image: Service1
    },
    {
        title: 'Mobile App',
        image: Service2
    },
    {
        title: 'Product Design',
        image: Service3
    },
    {
        title: 'Branding',
        image: Service4
    },
    {
        title: 'Photography',
        image: Service5
    },
    {
        title: 'Motion Design',
        image: Service6
    },
    {
        title: 'Web Development',
        image: Service4
    },
    {
        title: 'Visualization',
        image: Service8
    }
]