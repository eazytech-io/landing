import React from 'react'
import ServicesImg from '../assets/images/services.png'

const Services = () => {
    return (
        <div className='flex flex-col w-[85%] m-auto mt-20'>
            <div className='flex flex-col md:flex-row justify-between'>
                <h1 className='text-5xl font-black text-left'>Effortless Collaboration, <br></br>
                    Speedy Results</h1>
                <p className='text-left float-right mt-10 md:mt-0 w-[95%] md:w-[30%] text-[#6B6B6B]' >Whether you're a B2B enterprise or a B2C startup, our team of experts ensures an effortless journey from concept to completion. </p>
            </div>
            <div className='flex flex-col md:flex-row mt-0 md:mt-16 gap-10'>
                <img className='w-1/2 md:block hidden' src={ServicesImg} alt="" />
                <div className='flex flex-col gap-10 mt-16'>
                    <div className='bg-[#81B6FF] p-5 rounded-3xl'>
                        <h1 className='text-[#fff] text-left text-2xl font-bold'>1. Consulting</h1>
                        <p className='text-left text-white mb-6 font-semibold'>Unleash Your Ideas</p>
                        <h6 className='text-left text-white'>Your journey with us begins by sharing your app or software idea. Our expert consultants will attentively listen to your vision, understand your goals, and offer valuable insights to shape a solid plan.  </h6>
                    </div>
                    <div>
                        <h1 className='text-[#000] text-left text-2xl font-bold'>2. Designing</h1>
                        <p className='text-left text-black mb-6 font-semibold'>Crafting the Perfect User Experience</p>
                        <h6 className='text-left text-black'>Your journey with us begins by sharing your app or software idea. Our expert consultants will attentively listen to your vision, understand your goals, and offer valuable insights to shape a solid plan.  </h6>
                    </div>
                    <hr />
                    <div>
                        <h1 className='text-[#000] text-left text-2xl font-bold'>3. Building The Code</h1>
                        <p className='text-left text-black mb-6 font-semibold'>Code, Test, Launch</p>
                        <h6 className='text-left text-black'>Your journey with us begins by sharing your app or software idea. Our expert consultants will attentively listen to your vision, understand your goals, and offer valuable insights to shape a solid plan.  </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services