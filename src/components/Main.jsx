/* This code is importing React and several components (About, Contact, Home, and Projects) from
different files and then defining a Main component that renders those components in a specific
order. The Main component is then exported as the default export of the file. */
import React from 'react'
import About from './About/About'
import Contact from './Contact'
import Home from './Home/Home'
import Projects from './Projects/Projects'

const Main = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Main