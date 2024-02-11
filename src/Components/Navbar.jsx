import React from 'react'
import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const Navbar = () => {

  const isMenuOpen = useSelector( store=> store.app.isMenuOpen);


  if(!isMenuOpen)
  return null;

  return (
    <div className='h-full w-[240px]  shadow-lg bg-gray-900 ' >

         

          <div className='flex  pt-4 hover:bg-gray-400'>
                <TiHome size='30' className='text-white mt-2'/>
                
                <h1 className='text-white p-2 ml-2 cursor-pointer text-lg mt-1'> <Link to="/">Home</Link></h1>
           </div>
          <div className='flex pt-4  mt-4  hover:bg-gray-400'>
            <SiYoutubeshorts size='30' className='text-white mt-2'/>
                <h1 className='text-white p-2 ml-2 cursor-pointer text-lg mt-1'>Shorts</h1>
           </div>
          <div className='flex pt-4  mt-4  hover:bg-gray-400'>
                <MdOutlineSubscriptions  size='30' className='text-white mt-2'/>
                <h1 className='text-white p-2 ml-2 cursor-pointer text-lg mt-1'>Subscription</h1>
           </div>

           <hr className='mt-4'></hr>


           <div>
                  <h1 className='mt-4 ml-8  text-white' >Your Channel</h1>
                  <h1 className='mt-4 ml-8 text-white' >History</h1>
                  <h1 className='mt-4 ml-8 text-white' >Your Video</h1>
                  <h1 className='mt-4 ml-8 mb-4 text-white' >Watch later</h1>
                
           </div>
           <hr></hr>
    </div>
  )
}

export default Navbar