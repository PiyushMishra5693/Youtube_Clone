import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { toggleMenu } from './utils/appSlice';
import { useDispatch } from 'react-redux';




const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler= ()=>{

    dispatch(toggleMenu());
  }
  
  
 
  return (

    <div className='flex w-screen h-20  bg-black '>
      
      
      <div className='flex'>


          <div className='' >
                <RxHamburgerMenu onClick={()=> toggleMenuHandler()} className='text-4xl m-4  text-white bg-black cursor-pointer' />
          </div>
          <div className='flex m-4'>
                <FaYoutube className=' text-red-600 bg-black text-4xl'/>
                <h1 className='text-2xl font-bold text-white'>Youtube</h1>
          </div>


      
          {/* <div className='flex m-4'>
            <input   className='w-[500px] h-[40px] ml-[250px]  border border-stone-500 rounded-l-full'></input>
            
            <button className='h-[40px] bg-stone-700 rounded-r-full'> 
                <CiSearch className='w-[50px] text-white '/>
            </button> */}
            
        </div>

        <div className='flex m-4'>
            <input   className='w-[500px] h-[40px] ml-[250px]  border border-stone-500 rounded-l-full'></input>
            
            <button className='h-[40px] bg-stone-700 rounded-r-full'> 
                <CiSearch className='w-[50px] text-white '/>
            </button>
      </div>


      <div className='flex w-4/12   h-20  justify-end' >

        <div className='flex  '>
        <MdOutlineOndemandVideo className=' mt-5 mr-[50px]  mb-[100px] w-[40px] h-[40px] text-white'/>

        <IoMdNotifications className='mt-5 mr-[50px] w-[40px] h-[40px] text-white'/>
      
        <img className= "mt-5 mr-[50px] w-[40px] h-[40px] rounded-full " src=" https://i.ibb.co/vcmKwkc/guest.png" alt="" />
        </div>


      </div>
       
   

      


    </div>
  )
}

export default Header;


/*
    Header
            Hamburger icon
            Youtube icon
            Search bar with button 

*/
