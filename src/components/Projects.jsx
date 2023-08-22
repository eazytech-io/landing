import React from 'react'
import Project1 from '../assets/images/project1.png'
import Rectangle from '../assets/images/Rectangle.png'
import Rectangle2 from '../assets/images/Rectangle2.png'
import Rectangle3 from '../assets/images/Rectangle3.png'

const Projects = () => {
    return (
        <div id='projects' className='flex flex-col md:flex-row w-[85%] md:gap-0 gap-10 m-auto mt-16 justify-between'>
            <div className='md:w-[30%]'>
                <h1 className='font-bold text-3xl text-left mb-5 md:mb-20'>Latest <br></br>
                    Projects
                </h1>
                <div className='flex flex-col'>
                    <div className='w-full bg-black h-[2px] mb-2'></div>
                    <h1 className='text-left font-semibold text-lg '>Techno And Chill
                        App & Website</h1>
                    <p className='text-left text-sm mb-6' >IOS App/WebApp/Website</p>
                    <img src={Rectangle} alt="" />
                </div>
            </div>
            <div className='flex flex-col self-center w-full md:w-[30%]'>
                <div className='w-full bg-black h-[2px] mb-2'></div>
                <h1 className='text-left font-semibold text-lg '>TEzEats Contactless
                    Dinning Solution</h1>
                <p className='text-left text-sm mb-6' >WebApp/Landing Page</p>
                <img src={Rectangle2} alt="" />
            </div>

            <div className='flex flex-col self-start  w-full md:w-[30%] '>
                <div className='w-full bg-black h-[2px] mb-2'></div>
                <h1 className='text-left font-semibold text-lg '>Go!Padel Tournaments
                    & Booking Software</h1>
                <p className='text-left text-sm mb-6' >WebApp</p>
                <img src={Rectangle3} alt="" />
            </div>
        </div>
    )
}

export default Projects