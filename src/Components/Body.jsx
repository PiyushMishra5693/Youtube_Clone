import Navbar from './Navbar'
import VideoContainer from './VideoContainer'

function Body() {

  


  return (

    <div className='flex bg-black'>     
            <div> 
                      <Navbar></Navbar>
            </div>
             
             <div>
                    <VideoContainer></VideoContainer>  
             </div>

     
    </div>
 
  )
}

export default Body