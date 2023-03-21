import './consignment.css';
import React, { useState } from "react";

function Consignment() {
    const [Date,setDate]=useState('')
    const [Oil,setOil]=useState('')
    const [newoil,setnewoil]=useState('')
    const [Quantity,setQuantity]=useState('')
    const [Rate,setRate]=useState('')
    const [Payment,setPayment]=useState('')
    const [error,setError]=useState(false)
    const [show, toggleShow] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Date.length === 0 || Oil.length === 0  ||  newoil.length === 0  || Quantity.length === 0 || Rate.length === 0 || Payment.length === 0){
            setError(true)
        }
        if(Date&&Oil&&Quantity&&Oil&&Rate&&Payment&&newoil)
        {
        console.log("Date: ",Date,"Oil: ",Oil,"newoil:",newoil,"Quantity: ",Quantity,"Rate: ",Rate,"Payment: ",Payment)
        }
    }
  return (


  <div className="consignment-form ">
   <form onSubmit={handleSubmit} className=''>
     <div className='consignment-title'>BOOK NEW PURCHASE CONSIGNMENT</div>
        
          {error&&Date.length<=0?
            <label className="consignment-label">
                  Booking Date*</label>:""}
        <div className='consignment-form-wrapper '>
            <div className='input-wrap consignment-input-field'>
                <img src='Calendar.png'/>
                <input type="date"  value="2023-01-03" placeholder='Enter Partner name'
                    className="consignment-input-text"
                    onChange={e=>setDate(e.target.value)} />
            </div>
        </div>

    {error&&Oil.length<=0?
    <label className="consignment-label">
         Oil type/name*</label>:""}
      <div className='consignment-form-wrapper '>
        <div className='wrap flex'>
          <div className='input-wrap consignment-select-field'>
            <div className='select-wrap '>
              <select  onChange={e=>setOil(e.target.value)} className="select-text">
                  <option selected disabled>Select</option>
                  <option value="EDIBLE OIL">EDIBLE OIL</option>
                  <option value="ARGAN OIL">ARGAN OIL</option>
                  <option value="SOYABEAN OIL">SOYABEAN OIL</option>
                  <option value="NUT OIL">NUT OIL</option>
              </select>
            </div>
          </div>
          <button className='consignment-circle '   onClick={() => toggleShow(!show)}>
       {show ? 
              <div  className='minusicon '
            >-</div> : <div  className='plusicon '
            >+</div>}
          </button>
        </div>
      </div>

      
         
      {show &&
      
        <div  className='consignment-form-wrapper '>
           {error&&newoil.length<=0?
        <label className="consignment-newlabel">
              New Oil type*</label>:""}
            <div className='input-wrap consignment-input-field'>
                <input type="text" placeholder='Enter new oil type'
                    className=" consignment-input-text "
                    onChange={e=>setnewoil(e.target.value)} />
            </div>
      </div>}

      {error&&Quantity.length<=0?
            <label className="consignment-label">
                  Booked Quantity in kg*</label>:""}
        <div className='consignment-form-wrapper '>
            <div className='input-wrap consignment-input-field'>
                <input type="text" placeholder='Enter quantity'
                    className=" consignment-input-text "
                    onChange={e=>setQuantity(e.target.value)} />
            </div>
      </div>
      
        {error&&Rate.length<=0?
            <label className="consignment-label">
                  Rate for 10 kg*</label>:""}
      <div className='consignment-form-wrapper '>
            <div className='input-wrap consignment-input-field'>
                <input type="phone" placeholder='Enter price'
                    className=" consignment-input-text "
                    onChange={e=>setRate(e.target.value)} />
            </div>
      </div>
      
      {error&&Payment.length<=0?
          <label className="consignment-label">
                Advance Payment*</label>:""}
    <div className='consignment-form-wrapper '>
          <div className='input-wrap consignment-input-field'>
              <input type="phone" placeholder='Enter paid amount'
                  className=" consignment-input-text"
                  onChange={e=>setPayment(e.target.value)} />
          </div>
    </div>

      <div className='consignment-button-wrap '>
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

export default Consignment