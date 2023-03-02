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
          <div className='input-wrap w-[340px] h-[45px] text-lg rounded flex items-center pl-4 mb-6'>
           <input type="text" name="name" placeholder='ENTER OTP'/>
          </div>
      </div>
      
      <div className='button-wrap'>
        <button className='w-[340px] h-[45px] text-lg rounded'>VERIFY</button>
      </div>
      <div className='subheading  pt-6 pb-8 text-center'>RESEND OTP</div>

    </form>
    </div>
  )
}

export default VerifyOtp