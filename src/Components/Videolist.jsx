import React, { useEffect, useState } from 'react'

function Videolist({info}) {
  
      const [formattedViews, setFormattedViews] = useState("");

    const img_url=info.snippet.thumbnails.medium.url;
    const channel_desc= info.snippet.title;
    const channel_name= info.snippet.channelTitle
    const views= info.statistics.viewCount

  
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

    <div className='cursor-pointer m-4  w-[350px] h-[350px] shadow-lg bg-[rgb(15,15,15)] rounded-xl '>
            
            <img  className=" rounded-xl "src ={img_url} alt="Video Thumbnail" />
            <h1 className=' font-bold ml-2 text-white py-2'>{channel_desc}</h1>
            <h1 className='ml-2 text-[20px] text-[#AAAAAA]  '>{channel_name}</h1>
            <h1 className='ml-2 text-[#AAAAAA] font-bold'>{formattedViews} Views</h1>
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