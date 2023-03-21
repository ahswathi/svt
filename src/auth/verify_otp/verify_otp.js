import React from 'react'
import './verify.css';

function VerifyOtp() {
  return (
    <div className="verify-form ">
    <form className=''>
      <div className='verify-title'>LOGIN OTP VERIFICATION
          <div className='verify-heading '> Please enter the OTP to get login</div>
      </div>
      <div className='verify-form-wrapper '>
          <div className='input-wrap verify-field'>
           <input type="text" name="name" placeholder='ENTER OTP'/>
          </div>
      </div>
      
      <div className='verify-button-wrap'>
        <button className='verify-button'>VERIFY</button>
      </div>
      <div className='verify-button-subtitle '>RESEND OTP</div>

    </form>
    </div>
  )
}

export default VerifyOtp