import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';

function Videolist({info}) {
  
      const [formattedViews, setFormattedViews] = useState("");

    const img_url=info.snippet.thumbnails.medium.url;
    const channel_desc= info.snippet.title;
    const channel_name= info.snippet.channelTitle
    const views= info.statistics.viewCount
    
    const IsDark = useSelector(store => store.app.IsDarkMode);

  
    useEffect(() => {
      // Format the views based on whether it's in millions or thousands (k)
      const formatViews = (views) => {
          if (views >= 1000000) {
              return (views / 1000000).toFixed(1) + "M";
          } else {
              return (views / 1000).toFixed(1) + "k";
          }
      };

      setFormattedViews(formatViews(views));
  }, [views]);




return (

    <div className={'cursor-pointer m-4  w-[350px] h-[350px]   rounded-xl'+(IsDark?"bg-[rgb(15,15,15)]":"bg-white")}>
            
            <img  className=" rounded-xl "src ={img_url} alt="Video Thumbnail" />
            <h1 className={'mt-2 font-bold ml-2 py-2 '+(IsDark?"text-white":"text-black")}>{channel_desc}</h1>
            <h1 className='ml-2 text-[16px] text-[#AAAAAA]'>{channel_name}</h1>
            <h1 className='ml-2 text-[16px] text-[#AAAAAA]'>{formattedViews} Views</h1>
    </div>
  )
}

export const AddVideoCard = ({info})=>{

  return (
      <div className='rounded-xl border border-red-500'>
            <Videolist info={info}/> 
      </div>
  )
}
export default Videolist