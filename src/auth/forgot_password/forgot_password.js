import React from 'react'
import '../forgot_password/password.css';

function ForgotPassword() {
  return (
    <div className="password-form">
      <form className=''>
        <div className='password-title'>RESET PASSWORD
          <div className='password-heading '> Hello there, here you can reset your password</div>
        </div>
        <div className='password-form-wrapper first-field-wrap'>
          <div className='input-wrap first-field '>
            <input type="text" name="name" placeholder='ENTER NEW PASSWORD'/>
          </div>
        </div>
        <div className='password-form-wrapper second-field-wrap'>
          <div className='input-wrap second-field '>
            <input type="password" name="password" placeholder='CONFIRM PASSWORD'/>
          </div>
        </div>
        <div className='password-button-wrap'>
          <button className='password-forgot_submit '>SUBMIT</button>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword