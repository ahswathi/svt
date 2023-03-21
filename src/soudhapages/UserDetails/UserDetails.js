import './userdetails.css';
import React, { useState } from "react";

function UserDetails() {
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


  <div className="user-form">
   <form onSubmit={handleSubmit} className='form'>
     <div className='user-title'>EDIT USER DETAILS</div>
        
    <div className='main-wrapper'> 
     <div className='sub-wrapper'>
          {error&&Name.length<=0?
            <label className="user-label">
                 Full name*</label>:""}
        <div className='form-wrapper'>
            <div className='input-wrap user-input-field'>
                <input type="text"  placeholder='Anil Kumar'
                    className=" user-input-text "
                    onChange={e=>setName(e.target.value)} />
            </div>
        </div>

    {error&&email.length<=0?
    <label className="user-label">
         Email id*</label>:""}
      <div className='form-wrapper '>
      <div className='input-wrap user-input-field'>
                <input type="text"  placeholder='anil@gmail.com'
                    className="  user-input-text "
                    onChange={e=>setemail(e.target.value)} />
            </div>
      </div>

          {error&&password.length<=0?
            <label className="user-label">
                  Password*</label>:""}
        <div className='form-wrapper'>
            <div className='input-wrap user-input-field'>
                <input type="text" placeholder='Abcd@123'
                    className="  user-input-text  "
                    onChange={e=>setpassword(e.target.value)} />
            </div>
      </div>
      

  </div>
  
  <div className='sub-wrapper'>
    {error&&number.length<=0?
            <label className="user-label-left">
                  Phone number*</label>:""}
        <div className='left-form-wrapper'>
            <div className='input-wrap  user-input-field'>
                <input type="text"  placeholder='9876543210'
                    className=" user-input-text "
                    onChange={e=>setnumber(e.target.value)} />
            </div>
        </div>

    {error&&status.length<=0?
    <label className="user-label-left">
         Status*</label>:""}
      <div className='left-form-wrapper'>
      <div className='input-wrap  user-input-field'>
      <div className='select-wrap '>
          <select  onChange={e=>setstatus(e.target.value)} className="user-select-text ">
              <option selected disabled>Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
             
          </select>
          
        </div>
            </div>
      </div>

          {error&&cpassword.length<=0?
            <label className="user-label-left">
                  Confirm password*</label>:""}
        <div className='left-form-wrapper'>
            <div className='input-wrap  user-input-field'>
                <input type="text" placeholder='Abcd@123'
                    className="user-input-text  "
                    onChange={e=>setcpassword(e.target.value)} />
            </div>
      </div>
      
     
   </div> 
  </div>

<div className='image-wrap'>
    <div className='User-Photo'>User Photo
    </div>
    <div className='image'><img src='user.png' alt="user"/>
    </div>
    <div className='Change-Image'>
        <label className='Change-Image-label'>Change Image
         <input type="file"  id="image" />
        </label>
    </div>
    <div className='Upload-subtext'>Recommended image size is ---x---
    </div>
</div>



<div className='line'><svg width="778" height="2" viewBox="0 0 778 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.148926" y1="0.924713" x2="777.818" y2="0.924713" stroke="black" stroke-opacity="0.3" stroke-width="0.5"/>
</svg>
</div>
      <div className='user-button-wrap'>
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

export default UserDetails