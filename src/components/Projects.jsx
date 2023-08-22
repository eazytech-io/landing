import React from 'react'
import Project1 from '../assets/images/project1.png'

const Projects = () => {
    return (
        <div className='flex flex-col md:flex-row w-[85%] md:gap-0 gap-10 m-auto mt-16 justify-between'>
            <div className='md:w-[30%]'>
                <h1 className='font-bold text-3xl text-left mb-5 md:mb-20'>Latest <br></br>
                    Projects
                </h1>
                <div className='flex flex-col'>
                    <div className='w-full bg-black h-[2px] mb-2'></div>
                    <h1 className='text-left font-semibold text-lg '>Techno And Chill
                        App & Website</h1>
                    <p className='text-left text-sm mb-6' >IOS App/WebApp/Website</p>
                    <img src={Project1} alt="" />
                </div>
            </div>
            <div className='flex flex-col self-center w-full md:w-[30%]'>
                <div className='w-full bg-black h-[2px] mb-2'></div>
                <h1 className='text-left font-semibold text-lg '>Techno And Chill
                    App & Website</h1>
                <p className='text-left text-sm mb-6' >IOS App/WebApp/Website</p>
                <img src={Project1} alt="" />
            </div>

            <div className='flex flex-col self-start  w-full md:w-[30%] '>
                <div className='w-full bg-black h-[2px] mb-2'></div>
                <h1 className='text-left font-semibold text-lg '>Techno And Chill
                    App & Website</h1>
                <p className='text-left text-sm mb-6' >IOS App/WebApp/Website</p>
                <img src={Project1} alt="" />
            </div>
        </div>
    )
}

export default Projects