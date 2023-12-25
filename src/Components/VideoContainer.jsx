import React, { useEffect, useState } from 'react'
import YOUTUBE_VIDEO_LIST from './utils/constants'
import Buttonlist from './Buttonlist';
import Videolist from './Videolist';


function VideoContainer() {
  
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
    
        <div>


          <div> <Buttonlist></Buttonlist> </div>

          <div className='flex flex-wrap p-4 m-4 justify-evenly'>

                  {
                      video.map( video => <Videolist  id={video.id} info={video}/>)
                  }
                 
                
                  
          </div>

        </div>
  )
}

export default VideoContainer;