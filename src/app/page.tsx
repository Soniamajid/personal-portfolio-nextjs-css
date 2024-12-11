import React from 'react'
import Home from './components/home';
import About from './components/about';
import Services from './components/service';
import Contact from './components/contact';
import Project from './components/project';
import Skills from './components/skill';

function page() {
  return (
    <div>
      <Home/>
      <About/>
      <Services/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}
export default page;