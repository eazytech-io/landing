import React from 'react'
import Line2 from '../assets/images/line2.svg'

const Stats = () => {
    return (
        <div className='flex w-[85%] gap-10 md:gap-0 m-auto mt-10 md:flex-row flex-col  justify-between'>
            <div className='flex flex-col justify-between w-[20%] gap-20'>
                <img src={Line2} className='w-[40%] hidden md:block' alt="" />
                <div className='w-[300px] h-[300px] rounded-full bg-[#F5FAFF] flex justify-center'>
                    <div className='flex justify-center flex-col '>
                        <h1 className='text-5xl font-bold text-[#81B6FF]'>5+</h1>
                        <p className='w-[60%] text-center self-center mt-4 text-[#888888]'>Years & Counting Of
                            Quality Design
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[20%] md:self-center'>
                <div className='w-[300px] h-[300px] rounded-full bg-[#F5FAFF] flex justify-center'>
                    <div className='flex justify-center flex-col '>
                        <h1 className='text-5xl font-bold text-[#81B6FF]'>5+</h1>
                        <p className='w-[60%] text-center self-center mt-4 text-[#888888]'>Years & Counting Of
                            Quality Design
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[20%] md:self-end'>
                <div className='w-[300px] h-[300px] rounded-full bg-[#F5FAFF] flex justify-center'>
                    <div className='flex justify-center flex-col '>
                        <h1 className='text-5xl font-bold text-[#81B6FF]'>5+</h1>
                        <p className='w-[60%] text-center self-center mt-4 text-[#888888]'>Years & Counting Of
                            Quality Design
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[20%] md:self-center'>
                <div className='w-[300px] h-[300px] rounded-full bg-[#F5FAFF] flex justify-center'>
                    <div className='flex justify-center flex-col '>
                        <h1 className='text-5xl font-bold text-[#81B6FF]'>5+</h1>
                        <p className='w-[60%] text-center self-center mt-4 text-[#888888]'>Years & Counting Of
                            Quality Design
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats