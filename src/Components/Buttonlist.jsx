import React from 'react'
import {  useSelector } from 'react-redux';

const Buttonlist = () => {

  const IsDark = useSelector(store => store.app.IsDarkMode);
  return (
    <div className={'flex justify-between  p-4 '+(IsDark?"bg-[rgb(15,15,15)]":"bg-white")}>
      

      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>All</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>Dance</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>Geometry</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>Mixes</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>NBA</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>Music</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>Science</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>History</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>News</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>Thought</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>Universe</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>Adventure</h3>
      <h3 className='cursor-pointer p-4 ml-4 w-auto h-[50px] bg-stone-800 text-white rounded-xl hover:bg-gray-400'>Physics</h3>
      
      
    </div>
  )
}

export default Buttonlist