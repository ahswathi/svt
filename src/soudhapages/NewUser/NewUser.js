import './newuser.css';
import React, { useState } from "react";

function NewUser() {
    const [Name,setName]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [number,setnumber]=useState('')
  const [status,setstatus]=useState('')
  const [cpassword,setcpassword]=useState('')
    const [error,setError]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Name.length === 0||email.length === 0 || password.length === 0 || status.length === 0 || number.length === 0 || cpassword.length === 0){
            setError(true)
        }
        if(Name&&email&&password&&number&&status&&cpassword)
        {
        console.log("Name:",Name,"email:",email,"password:",password,"number:",number,"status:",status,
        "cpassword:",cpassword)
        }
    }
  return (


  <div className="newuser-form ">
   <form onSubmit={handleSubmit} className='form'>
     <div className='newuser-title '>ADD NEW USER</div>
        
    <div className='main-wrapper '> 
     <div className='sub-wrapper'>
     {error&&Name.length<=0?
            <label className="newuser-label">
                 Full name*</label>:""}
        <div className='form-wrapper'>
            <div className='input-wrap newuser-input-field'>
                <input type="text"  placeholder='Enter full name'
                    className="newuser-input-text "
                    onChange={e=>setName(e.target.value)} />
            </div>
        </div>

        {error&&email.length<=0?
    <label className="newuser-label">
         Email id*</label>:""}
      <div className='form-wrapper '>
      <div className='input-wrap newuser-input-field'>
                <input type="text"  placeholder='Enter email id'
                    className="newuser-input-text "
                    onChange={e=>setemail(e.target.value)} />
            </div>
      </div>

      {error&&password.length<=0?
            <label className="newuser-label">
                  Password*</label>:""}
        <div className='form-wrapper'>
            <div className='input-wrap newuser-input-field'>
                <input type="text" placeholder='Enter password'
                    className="newuser-input-text "
                    onChange={e=>setpassword(e.target.value)} />
            </div>
      </div>
      

  </div>
  
  <div className='sub-wrapper'>
  {error&&number.length<=0?
            <label className="newuser-label-left">
                  Phone number*</label>:""}
        <div className='left-form-wrapper'>
            <div className='input-wrap newuser-input-field'>
                <input type="text"  placeholder='Enter phone number'
                    className="newuser-input-text "
                    onChange={e=>setnumber(e.target.value)} />
            </div>
        </div>

        {error&&status.length<=0?
    <label className="newuser-label-left">
         Status*</label>:""}
      <div className='left-form-wrapper'>
      <div className='input-wrap newuser-input-field'>
      <div className='select-wrap '>
      <select  onChange={e=>setstatus(e.target.value)} className="newuser-select-text">
              <option selected disabled>Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
             
          </select>
          
        </div>
            </div>
      </div>

      {error&&cpassword.length<=0?
            <label className="newuser-label-left">
                  Confirm password*</label>:""}
        <div className='left-form-wrapper'>
            <div className='input-wrap newuser-input-field'>
                <input type="text" placeholder='Confirm password'
                    className="newuser-input-text"
                    onChange={e=>setcpassword(e.target.value)} />
            </div>
      </div>
      
     
   </div> 
  </div>

<div className='image-wrap'>
    <div className='User-Photo'>User Photo
    </div>
    <div className='Upload'>
        <label className='Upload-text'>Upload Image
         <input type="file"  id="image" />
        </label>
    </div>
    <div className='Upload-subtext '>Recommended image size is ---x---
    </div>
</div>



<div className='line'>
    <svg width="778" height="2" viewBox="0 0 778 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.148926" y1="0.924713" x2="777.818" y2="0.924713" stroke="black" stroke-opacity="0.3" stroke-width="0.5"/>
    </svg>
</div>
      <div className='newuser-button-wrap'>
        <div className='close-button'>
            <a href='#' className='close-button-text'>Close</a>
        </div>  
        <div>
          <button className='submit-button'>Submit</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default NewUser