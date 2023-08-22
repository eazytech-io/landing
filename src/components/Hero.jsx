import React from 'react'
import HeroImg from '../assets/images/hero.png'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row w-[85%] m-auto mb-10'>
            <div className='flex flex-col md:w-1/2 w-[90%] m-auto'>
                <h1 className='md:text-7xl text-5xl font-bold md:w-[80%] text-left mb-10'>
                    Turning <br></br>
                    <span className='text-[#81B6FF]'> Ideas</span> Into <br></br>
                    Digital <span className='text-[#81B6FF]'>Marvels</span>
                </h1>
                <p className='text-left md:w-[60%] mb-10 text-[#6B6B6B]'>
                    Your Idea, Our Expertise - From Concept to Creation. Consult, Collaborate, Design, Code, and Deliver - We've Got It All Covered!
                </p>
                <button className='float-left text-2xl bg-[#81B6FF] md:w-[45%] h-[55px] rounded-[0.375rem] text-white font-semibold'>
                    FREE Consultation
                </button>
            </div>
            <div className='w-[100%] m-auto md:w-1/2 hidden md:block' >
                <img src={HeroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero