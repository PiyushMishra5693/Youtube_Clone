import React from 'react'

function Videolist({info}) {
  
    
    const img_url=info.snippet.thumbnails.high.url;
    const channel_desc= info.snippet.title;
    const channel_name= info.snippet.channelTitle
    const views= info.statistics.viewCount





return (
    <div className=' my-2 w-[400px] h-[400px] shadow-lg bg-black rounded-xl'>
            
           
            <img  className="rounded-xl w-[100%]"src ={img_url} alt="Video Thumbnail" />
            <h1 className='font-bold ml-2 text-gray-600'>{channel_desc}</h1>
            <h1 className='ml-2 text-gray-600'>{channel_name}</h1>
            <h1 className='ml-2 text-gray-600'>{views} views</h1>
    </div>
  )
}

export default Videolist