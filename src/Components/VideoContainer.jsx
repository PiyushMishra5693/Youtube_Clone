import React, { useEffect, useState } from 'react'
import YOUTUBE_VIDEO_LIST from './utils/constants'
import Videolist from './Videolist';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';



function VideoContainer() {


  const IsDark = useSelector(store => store.app.IsDarkMode);
  
  const [video,setvideo]= useState([]);

  useEffect(()=>{
      getVideo();
  },[])


  async function getVideo(){

        const data = await fetch(YOUTUBE_VIDEO_LIST);
        const json = await data.json();
        setvideo(json.items);
       
        // const url=json.items[0].snippet.thumbnails.medium.url;
  }

  return (
    
        <div className={'h-auto w-auto '+(IsDark?'bg-[rgb(15,15,15)]':'bg-white')}>

         

          <div className='flex flex-wrap  justify-evenly '>

                  {/* {video[0] && <AddVideoCard info={video[0]}/>} */}

                  {
                      video.map( (video) => <Link to={"/watch?v="+video.id} key={video.id}><Videolist key={video.id}   info={video}/></Link>)
                  }
                 
                
                  
          </div>

        </div>
  )
}

export default VideoContainer;