import React from 'react'
import './rythme.scss'
import Main from './Components/main'
import About from './Components/about'
import Class from './Components/class'
import Learn from './Components/learn'
import Program from './Components/program'
import Testimonial from './Components/testimonial'
import Contact from './Components/contact'
import Event from './Components/event'
import Post from './Components/post'
import Footer from './Components/footer'

function Rythme() {
    return (
			<div>
                <Main />
                <About />
				<Class />
                <Learn />
                <Program />
                <Testimonial />
                <Contact />
                <Event />
				<Post />
                <Footer />
			</div>
		)
}

export default Rythme
