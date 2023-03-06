import React from 'react'
import '../auth/login.css';

function Login() {
  return (
    <div className="auth-form-login w-[421.21px] h-[466.18px] bg-white rounded-lg  ">
   <form className='rounded-[10px]'>
     <div className=' w-[421.21px] h-[115px] text-6xl	flex justify-center items-center font-extrabold
     bg-[#294F83] text-[#FFFFFF] rounded-t-lg leading-{70px}'>LOGO</div>
     <div className=' pt-6 pb-8 text-xl font-medium	leading-[23.44px] text-[#00000099] align-top  text-center '> LOGIN TO DASHBOARD</div>
      <div className='form-wrapper grid justify-items-center'>
          <div className='input-wrap leading-5	tracking-[0.5px] w-[340px] h-[45px] text-sm	 border-[#0000004D] rounded  flex items-center pl-4 mb-6'>
           <input type="text" name="name" placeholder='USERNAME'/>
          </div>
          <div className='icon-wrap'>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0628 18.0594V16.3927C17.0628 15.5087 16.7116 14.6608 16.0865 14.0357C15.4614 13.4106 14.6135 13.0594 13.7295 13.0594H7.06283C6.17877 13.0594 5.33092 13.4106 4.7058 14.0357C4.08068 14.6608 3.72949 15.5087 3.72949 16.3927V18.0594" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.3968 9.72605C12.2378 9.72605 13.7301 8.23367 13.7301 6.39272C13.7301 4.55177 12.2378 3.05939 10.3968 3.05939C8.55586 3.05939 7.06348 4.55177 7.06348 6.39272C7.06348 8.23367 8.55586 9.72605 10.3968 9.72605Z" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
          </div>
      </div>
      <div className='form-wrapper grid justify-items-center'>
      <div className='input-wrap leading-5	tracking-[0.5px] w-[340px] h-[45px] text-sm	 border-[#0000004D] rounded  flex items-center pl-4 mb-10'>
          <input type="password" name="password" placeholder='PASSWORD'/>
          </div>
          <div className='icon-wrap'>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2298 9.72595H4.56315C3.64268 9.72595 2.89648 10.4721 2.89648 11.3926V17.226C2.89648 18.1464 3.64268 18.8926 4.56315 18.8926H16.2298C17.1503 18.8926 17.8965 18.1464 17.8965 17.226V11.3926C17.8965 10.4721 17.1503 9.72595 16.2298 9.72595Z" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.22949 9.72595V6.39262C6.22949 5.28755 6.66848 4.22774 7.44988 3.44634C8.23128 2.66494 9.29109 2.22595 10.3962 2.22595C11.5012 2.22595 12.561 2.66494 13.3424 3.44634C14.1238 4.22774 14.5628 5.28755 14.5628 6.39262V9.72595" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
      </div>
      <div className='button-wrap'>
        <button className='w-[340px] h-[45px] text-base	leading-5	font-semibold	bg-[#16ABE5] 	text-[#FFFFFF] rounded'>LOGIN</button>
      </div>
      <div className='pt-6 pb-8 text-[#00000099] text-sm text-right leading-[16.41px] font-medium	pr-10'>Forgot password?</div>

    </form>
    </div>
  )
}

export default Login