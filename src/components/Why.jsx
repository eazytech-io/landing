import React from 'react'
import QA from '../assets/images/qa.svg'
import Collab from '../assets/images/collab.svg'
import Line from '../assets/images/line.svg'

const Why = () => {
    return (
        <div id='about' className='flex flex-col bg-[#F5F9FF] w-[85%] m-auto rounded-3xl pb-10 mb-10 p-10'>
            <h1 className='text-3xl md:text-5xl font-black'>Why <span className='text-[#81B6FF]'> EzTech</span> Is Your Best Choice <br></br>
                For Software Development
            </h1>
            <p className='mt-10 w-[80%] m-auto text-[#BEBEBE]'>
                Our seasoned consultants are here to listen, analyze, and guide you step-by-step, from concept to launch. We understand your vision, align it with market trends, and ensure a product that stands out.
            </p>
            <div className='flex flex-col md:flex-row  justify-center gap-10 mt-10'>
                <div className='bg-[#fff] rounded-lg m-auto w-[95%] md:w-[30%]'>
                    <div className='bg-[#81B6FF] h-[55px] w-[15%] flex justify-center rounded-md ml-7 mt-6'>
                        <img className='w-[60%]' src={Line} alt="" />
                    </div>
                    <h4 className='ml-7 text-left text-[#7B7B7B] mt-5 mb-5 text-xl font-semibold'>Innovation</h4>
                    <p className='ml-7 text-left w-[70%] text-[#B2B2B2] mb-6 text-sm'>We thrive on creative problem-solving and stay up-to-date with the latest industry trends to deliver innovative solutions that stand out in the market</p>
                </div>

                <div className='bg-[#fff] rounded-lg m-auto w-[95%] md:w-[30%]'>
                    <div className='bg-[#81B6FF] h-[55px] w-[15%] flex justify-center rounded-md ml-7 mt-6'>
                        <img className='w-[60%]' src={Collab} alt="" />
                    </div>
                    <h4 className='ml-7 text-left text-[#7B7B7B] mt-5 mb-5 text-xl font-semibold'>Collaboration</h4>
                    <p className='ml-7 text-left w-[70%] text-[#B2B2B2] mb-6 text-sm'>Your vision is at the heart of everything we do. We foster open communication and work collaboratively with you to create the perfect product.</p>
                </div>

                <div className='bg-[#fff] rounded-lg m-auto w-[95%] md:w-[30%]'>
                    <div className='bg-[#81B6FF] h-[55px] w-[15%] flex justify-center rounded-md ml-7 mt-6'>
                        <img className='w-[50%]' src={QA} alt="" />
                    </div>
                    <h4 className='ml-7 text-left text-[#7B7B7B] mt-5 mb-5 text-xl font-semibold'>Quality Assurance</h4>
                    <p className='ml-7 text-left w-[70%] text-[#B2B2B2] mb-6 text-sm'>Our rigorous testing and quality assurance processes ensure that your application or software functions flawlessly across all devices.</p>
                </div>

            </div>

        </div>
    )
}

export default Why