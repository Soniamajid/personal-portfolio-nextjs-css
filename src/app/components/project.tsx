import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Project() {
  return (
    <div id='project'>
        <section className="text-gray-600 body-font -mt-[70px]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-5">
      <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-5 text-white">
        My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-5 ">
        {/* Project 1*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">

          <Image data-aos="zoom-in-up" src={"/resume.png"}
          width={300}
          height={100}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-red-500  bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Hackathon projects
            </h2>
            <h1 className="title-font text-lg font-bold text-red-500 mb-3">
              Static Resume Buidler
            </h1>
            <p className="leading-relaxed text-black">
              This is the project which I have created for those who owns a Hackathon projects
            </p>
            
            <Link target='blank' href={"https://hackathon-milestone-5-woad.vercel.app/"}>
            <p className="leading-relaxed text-red-500 hover:underline font-bold">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Project2*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/choose.png"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Html Css Javascript
            </h2>
            <h1 className="title-font text-lg font-bold text-red-500  mb-3">
              Car Website
            </h1>
            <p className="leading-relaxed text-black">
              This is the project which I have created for those who owns a Html, Css and Javascript,
            </p>
            <Link target='blank' href={"https://burger-website-delta.vercel.app/"}>
            <p className="leading-relaxed text-red-500 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>
       
     
       {/* Project 3*/}
       <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/client.jpg"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Html Css Javascript
            </h2>
            <h1 className="title-font text-lg font-bold text-red-500 mb-3">
              Watch Website
            </h1>
            <p className="leading-relaxed text-black">
              This is the project which I have created for those who owns a Html css and Javascript
            </p>
            <Link target='blank' href={"https://watch-website-nine.vercel.app/"}>
            <p className="leading-relaxed text-red-500 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>

      {/* project4 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/deals.png"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Html , Css nad Javascript projects
            </h2>
            <h1 className="title-font text-lg font-bold text-red-500 mb-3">
              Shopping Website
            </h1>
            <p className="leading-relaxed text-black">
              This is the project which I have created for those who owns a javascript projects
            </p>
            <Link target='blank' href={"https://shopping-website-one-kappa.vercel.app/"}>
            <p className="leading-relaxed text-red-500 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>

      

      {/* Project5 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/menu-4.jpg"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Html , Css and Javascript project
            </h2>
            <h1 className="title-font text-lg font-bold text-red-500 mb-3">
               Food Website
            </h1>
            <p className="leading-relaxed text-black">
              This is the project which I have created for those who owns a html css and javascript projects
            </p>
            <Link target='blank' href={"https://food-website-lac-ten.vercel.app/"}>
            <p className="leading-relaxed text-red-500 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>

      
       {/* Project6 */}
       <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/order-1.png"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Html Css and Javascript
            </h2>
            <h1 className="title-font text-lg font-bold text-red-500 mb-3">
              Resturant Website
            </h1>
            <p className="leading-relaxed text-black">
              This is the project which I have created for those who owns a Html , Css and Javascript
            </p>
            <Link target='blank' href={"https://resturant-website-beige.vercel.app/"}>
            <p className="leading-relaxed text-red-500 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Project;