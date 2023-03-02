import React from 'react'
import '../auth/password.css';

function ForgotPassword() {
  return (
    <div className="auth-form-login w-[421px] h-[385px] ">
   <form className=''>
   <div className='logo w-[421px] h-[115px] pt-8'>RESET PASSWORD
          <div className='heading pt-2'> Hello there, here you can reset your password</div>
      </div>
      <div className='form-wrapper grid justify-items-center pt-8'>
          <div className='input-wrap w-[340px] h-[45px] text-lg rounded flex items-center pl-4 mb-6'>
           <input type="text" name="name" placeholder='ENTER NEW PASSWORD'/>
          </div>
      </div>
      <div className='form-wrapper grid justify-items-center'>
          <div className='input-wrap w-[340px] h-[45px] text-lg rounded flex items-center pl-4 mb-10'>
          <input type="password" name="password" placeholder='CONFIRM PASSWORD'/>
          </div>
      </div>
      <div className='button-wrap'>
        <button className='w-[340px] h-[45px] text-lg rounded'>SUBMIT</button>
      </div>
    </form>
    </div>
  )
}

export default ForgotPassword