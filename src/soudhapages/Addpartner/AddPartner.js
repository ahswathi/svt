import './addpartner.css';
import React, { useState } from "react";

function AddPartner() {
    const [partnerName,setpartnerName]=useState('')
    const [location,setlocation]=useState('')
    const [number,setnumber]=useState('')
    const [status,setstatus]=useState('')
    const [error,setError]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(partnerName.length === 0||location.length === 0 || number.length === 0 || status.length === 0){
            setError(true)
        }
        if(partnerName&&location&&number&&status)
        {
        console.log("Partner name: ",partnerName,"Location: ",location,"Number: ",number,"Status: ",status)
        }
    }
  return (


    <div className="addpartner-form">
   <form onSubmit={handleSubmit} className=''>
     <div className='partner-title'>ADD SOUDHA PARTNER</div>
        
          {error&&partnerName.length<=0?
            <label className="partner-label ">
                  Partner Name*</label>:""}
        <div className='partner-form-wrapper'>
            <div className='input-wrap partner-input-field'>
                <input type="text"  placeholder='Enter Partner name'
                    className="partner-input-text  "
                    onChange={e=>setpartnerName(e.target.value)} />
            </div>
        </div>

          {error&&location.length<=0?
            <label className="partner-label ">
                  Location*</label>:""}
        <div className='partner-form-wrapper'>
            <div className='input-wrap partner-input-field'>
                <input type="text" placeholder='Enter Location'
                    className=" partner-input-text"
                    onChange={e=>setlocation(e.target.value)} />
            </div>
      </div>
      
        {error&&number.length<=0?
            <label className="partner-label ">
                  Whatsapp Number*</label>:""}
      <div className='partner-form-wrapper  '>
            <div className='input-wrap partner-input-field'>
                <input type="phone" placeholder='Enter Whatsapp number'
                    className=" partner-input-text "
                    onChange={e=>setnumber(e.target.value)} />
            </div>
      </div>

        {error&&status.length<=0?
            <label className="partner-label ">
                  Satuts*</label>:""}
      <div className='partner-form-wrapper'>
      <div className='input-wrap partner-input-field'>
       <div className='select-wrap '>
          <select  onChange={e=>setstatus(e.target.value)} className=" w-[320px] text-xs font-regular  ">
              <option selected disabled>Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
             
          </select>
          
        </div>
        </div>
      </div>

      <div className='button-wrap '>
        <div className='close-button '>
            <a href='#' className='close-button-text'>Close</a>
        </div>  
        <div>
          <button className='submit-button '>Submit</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default AddPartner