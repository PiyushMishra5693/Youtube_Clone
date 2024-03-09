import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from './utils/appSlice';


export const SearchPage = () => {
  
  const dispatch = useDispatch();

  const searchresult= useSelector(store => store.result);

  

  useEffect(()=>{
      dispatch(closeMenu())
      console.log(searchresult);
  },[])

 


  
  return (
    <div>   
           <input className='w-96 h-8 border border-solid border-black'></input>
           <button onClick>Search</button>

      </div>
  )
}
