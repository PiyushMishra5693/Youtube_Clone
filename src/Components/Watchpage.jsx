import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from './utils/appSlice';
import {  useSearchParams } from 'react-router-dom';
import {CommentsContainer} from './CommentsContainer';
import { LiveChat } from './LiveChat';

function Watchpage() {


  const [searchParams] = useSearchParams();
  const IsDark = useSelector(store => store.app.IsDarkMode);

  
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(closeMenu());
  },[])

  return (

    <div className={IsDark?"bg-[rgb(15,15,15)]":"bg-white"}>
    <div className='flex mx-5 py-4 w-full'>

          <div >
          <iframe 
              width="1000" 
              height="600" 
              src={"https://www.youtube.com/embed/" + searchParams.get("v") }
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
          </iframe>
          </div>

          <div className='w-full'>
              <LiveChat/>
          </div>
    </div>

      <CommentsContainer/>
    </div>
  )
}

export default Watchpage