import React from 'react'
import '../auth/verify.css';

function VerifyOtp() {
  return (
    <div className="auth-form-login w-[421px] h-[354px] ">
    <form className=''>
      <div className='logo w-[421px] h-[115px] pt-8'>LOGIN OTP VERIFICATION
          <div className='heading pt-2'> Please enter the OTP to get login</div>
      </div>
      <div className='form-wrapper grid justify-items-center pt-10'>
          <div className='input-wrap leading-5	tracking-[0.5px] w-[340px] h-[45px] text-sm	 border-[#0000004D] rounded  flex items-center pl-4 mb-6'>
           <input type="text" name="name" placeholder='ENTER OTP'/>
          </div>
      </div>
      
      <div className='button-wrap'>
        <button className='w-[340px] h-[45px] text-lg rounded font-semibold	 leading-5 bg-[#16ABE5]		text-[#FFFFFF]'>VERIFY</button>
      </div>
      <div className='pt-6 pb-8 text-center text-sm	 font-semibold text-[#16ABE5]	leading-[16.41px]'>RESEND OTP</div>

    </form>
    </div>
  )
}

export default VerifyOtp