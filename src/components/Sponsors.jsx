import React from 'react'
import Sponsor1 from '../assets/images/s1.png'
import Sponsor2 from '../assets/images/s2.png'
import Sponsor3 from '../assets/images/s3.png'
import Sponsor4 from '../assets/images/s4.png'

const Sponsors = () => {
    return (
        <div className='flex flex-row gap-8 justify-between w-[85%] m-auto mb-12 mt-12'>
            <h1 className='text-left text-3xl font-semibold'>
                Trusted by
                <br></br>
                Top Companies
            </h1>
            <div className='self-center w-[10%]'>
                <img src={Sponsor1} alt="" />
            </div>
            <div className='self-center w-[20%]' >
                <img src={Sponsor2} alt="" />
            </div>
            <div className='self-center w-[18%]' >
                <img src={Sponsor3} alt="" />
            </div>
            <div className='self-center w-[10%]'>
                <img src={Sponsor4} alt="" />
            </div>
        </div>
    )
}

export default Sponsors