import React from 'react'
import Image from "next/image"
import "../components/home.css"

function Home() {
  return (
    <div className='home' id='home'>
      {/* Home  */}
      <div className="home-content">
        <h3>Hi I Am</h3>
        <h1>Sonia Majid</h1>
        <h2 className='loop'>UX/UI Designer</h2>
        <p>
          Hello everyone. My name is Sonia Majid.I am a passionate web developer.I specialize in front-end development.I work with Next.js, React, and Tailwind CSS.
          My expertise lies in building responsive websites using modern web technologies.I create intuitive user experiences that delight and engage users.
          My goal is to build functional, beautiful web applications that solve real-world problems.
        </p>
      </div>
      <div className='circle'>
      <Image src={"/girl.avif"}
        width={200}
        height={200}
        alt='logo'
        className='image'/>
        </div>
    </div>
  )
}
export default Home;