import React, { useState } from 'react'
import alwaysimg from '../../img/alwaysimg01.png'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

function SetNewPassword() {


    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    return (
        <div className='flex justify-evenly items-center mt-20'>

            <div className=''>
                <img src={alwaysimg} alt="" />
            </div>

            <div className='space-y-6 mt-10'>
                <p className='text-[20px] text-center'>Create a new password. <br />
                    insure it differs from previous one.</p>
                <h1 className='font-bold text-[48px] w-[420px] text-center'>
                    Set new Password
                </h1>
                {/* <div>
                    <span className='text-start mb-3 text-[#364636]'>New Password</span>
                    <input className='mt-2 w-full border border-[#8CAB91] rounded-1 p-2' type="password" name='newPassword' placeholder='**********' />
                </div> */}

                <div className="relative text-[#364636] ">
                    <span className="text-[#364636] mb-1 "> New Password </span> <br />
                    <input
                        type={showPassword ? "text" : "password"}
                        namë="password"
                        className="mt-2 w-full border  border-[#8CAB91] rounded-sm p-1 "
                        placeholder="********"
                    />
                    <div className="absolute top-10 right-4 "

                        onClick={() => setShowPassword(!showPassword)}>



                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                    </div>
                    <br />
                </div>

                {/* .................................. */}

                <div className="relative text-[#364636] ">
                    <span className="text-[#364636] mb-1 "> Confirm new password </span> <br />
                    <input
                        type={showNewPassword ? "text" : "password"}
                        namë="password"
                        className="mt-2 w-full border  border-[#8CAB91] rounded-sm p-1 "
                        placeholder="********"
                    />
                    <div className="absolute top-10 right-4 "

                        onClick={() => setShowNewPassword(!showNewPassword)}>



                        {showNewPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                    </div>
                    <br />
                </div>

                <div className=' flex justify-center'>
                    <button className='bg-[#8CAB91] rounded-[20px] uppercase text-white w-[400px] py-[16px]' type='submit'>Confirm Password</button>
                </div>
            </div>
        </div>
    )
}

export default SetNewPassword