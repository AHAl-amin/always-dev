import React from 'react'
import alwaysimg from '../../img/alwaysimg01.png'
function Congratulations() {
    return (
        <div className='flex gap-6 justify-evenly items-center mt-20'>
            <div>
                <img src={alwaysimg} alt="" />
            </div>
            <div className='space-y-12'>
                <p className='text-[20px]'>Your password has been updated, please change <br /> your password regularly to avoid this happening</p>
                <h1 className='mx-auto w-[370px] font-bold text-[48px]'>Congratulations</h1>
                <div className=' flex justify-center '>
                    <button className='bg-[#8CAB91] rounded-[20px] uppercase text-white w-full  py-[16px]' type='submit'>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Congratulations