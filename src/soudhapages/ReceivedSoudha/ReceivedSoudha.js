import './receivedsoudha.css';
import React, { useState } from "react";

function ReceivedSoudha() {
    const [Date,setDate]=useState('')
    const [Bill,setBill]=useState('')
    const [Quantity,setQuantity]=useState('')
    const [Rate,setRate]=useState('')
    const [Total,setTotal]=useState('')
    const [Other,setOther]=useState('')
    const [Vehicle,setVehicle]=useState('')
    const [Unload,setUnload]=useState('')
    const [Short,setShort]=useState('')
    const [Payment,setPayment]=useState('')
    const [error,setError]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Date.length === 0 || Bill.length === 0  ||  Quantity.length === 0 || Rate.length === 0 || Other.length === 0 ||
          Vehicle.length === 0 || Unload.length === 0  ||  Short.length === 0 || Total.length === 0 || Payment.length === 0){
            setError(true)
        }
        if(Date&&Bill&&Quantity&&Rate&&Other&&Vehicle&&Unload&&Short&&Total&&Payment)
        {
        console.log("Date:",Date,"Bill:",Bill,"Quantity:",Quantity,"Rate:",Rate,"Other:",Other,
        "Vehicle:",Vehicle,"Unload:",Unload,"Short:",Short,"Total:",Total,"Payment:",Payment)
        }
    }
  return (


  <div className="received-form ">
   <form onSubmit={handleSubmit} className='form'>
     <div className='received-title'>ADD NEW RECEIVED SOUDHA</div>
        
    <div className='main-wrapper flex  justify-around'> 
     <div className='sub-wrapper'>
          {error&&Date.length<=0?
            <label className="received-label">
                  Date*</label>:""}
        <div className='form-wrapper'>
        <div className='input-wrap received-input-field'>
                <img src='Calendar.png'/>
                <input type="date"  value="2023-01-03" placeholder='Enter Partner name'
                    className="received-input-text "
                    onChange={e=>setDate(e.target.value)} />
            </div>
        </div>

    {error&&Bill.length<=0?
    <label className="received-label">
         Bill no*</label>:""}
      <div className='form-wrapper '>
      <div className='input-wrap received-input-field'>
                <input type="text"  placeholder='Enter bill no'
                    className="received-input-text  "
                    onChange={e=>setBill(e.target.value)} />
            </div>
      </div>

          {error&&Quantity.length<=0?
            <label className="received-label">
                  Billing quantity*</label>:""}
        <div className='form-wrapper'>
            <div className='input-wrap received-input-field'>
                <input type="text" placeholder='Enter billing quantity'
                    className=" received-input-text "
                    onChange={e=>setQuantity(e.target.value)} />
            </div>
      </div>
      
        {error&&Rate.length<=0?
            <label className="received-label">
                  Billing rate for 10kg*</label>:""}
      <div className='form-wrapper'>
            <div className='input-wrap received-input-field'>
                <input type="phone" placeholder='Enter price'
                    className=" received-input-text "
                    onChange={e=>setRate(e.target.value)} />
            </div>
      </div>
      
      {error&&Total.length<=0?
          <label className="received-label">
                Total billing amount*</label>:""}
    <div className='form-wrapper'>
          <div className='input-wrap received-input-field'>
              <input type="phone" placeholder='Enter price'
                  className=" received-input-text "
                  onChange={e=>setTotal(e.target.value)} />
          </div>
    </div>

  </div>
  
  <div className='sub-wrapper'>
    {error&&Other.length<=0?
            <label className="received-label-left">
                  Other amount*</label>:""}
        <div className='left-form-wrapper'>
            <div className='input-wrap received-input-field'>
                <input type="text"  placeholder='Enter amount'
                    className=" received-input-left-text"
                    onChange={e=>setOther(e.target.value)} />
            </div>
        </div>

    {error&&Vehicle.length<=0?
    <label className="received-label-left">
         Vehicle number*</label>:""}
      <div className='left-form-wrapper'>
      <div className='input-wrap received-input-field'>
                <input type="text"  placeholder='Enter vehicle number'
                    className="  received-input-left-text "
                    onChange={e=>setVehicle(e.target.value)} />
            </div>
      </div>

          {error&&Unload.length<=0?
            <label className="received-label-left">
                  Unload quantity*</label>:""}
        <div className='left-form-wrapper'>
            <div className='input-wrap received-input-field'>
                <input type="text" placeholder='Enter unload quantity'
                    className=" received-input-left-text "
                    onChange={e=>setUnload(e.target.value)} />
            </div>
      </div>
      
        {error&&Short.length<=0?
            <label className="received-label-left">
                  Short quantity*</label>:""}
      <div className='left-form-wrapper'>
            <div className='input-wrap received-input-field'>
                <input type="phone" placeholder='Enter short quantity'
                    className=" received-input-left-text"
                    onChange={e=>setShort(e.target.value)} />
            </div>
      </div>
      
      {error&&Payment.length<=0?
          <label className="received-label-left">
                Payment*</label>:""}
    <div className='left-form-wrapper'>
          <div className='input-wrap received-input-field'>
              <input type="phone" placeholder='Enter paid amount'
                  className=" received-input-left-text "
                  onChange={e=>setPayment(e.target.value)} />
          </div>
    </div>
   </div> 
  </div>

<div className='line'><svg width="778" height="2" viewBox="0 0 778 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.148926" y1="0.924713" x2="777.818" y2="0.924713" stroke="black" stroke-opacity="0.3" stroke-width="0.5"/>
</svg>
</div>
      <div className='received-button-wrap'>
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

export default ReceivedSoudha