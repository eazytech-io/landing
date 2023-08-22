import React from 'react'
import ServicesImg from '../assets/images/services.png'

const Services = () => {
    return (
        <div id="services" className='flex flex-col w-[85%] m-auto mt-20'>
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
                    <div className='p-5'>
                        <h1 className='text-[#000] text-left text-2xl font-bold'>2. Designing</h1>
                        <p className='text-left text-black mb-6 font-semibold'>Crafting the Perfect User Experience</p>
                        <h6 className='text-left text-black'>Our skilled designers will transform your vision into captivating UI/UX designs. With your preferences and target audience in mind, we create interfaces that resonate with your potential user. </h6>
                    </div>
                    <hr />
                    <div className='p-5'>
                        <h1 className='text-[#000] text-left text-2xl font-bold'>3. Building The Code</h1>
                        <p className='text-left text-black mb-6 font-semibold'>Code, Test, Launch</p>
                        <h6 className='text-left text-black'>Watch your idea come to life as our proficient developers turn the designs into functional code. We emphasize efficiency and quality, ensuring rigorous testing for a seamless and bug-free performance.  </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services