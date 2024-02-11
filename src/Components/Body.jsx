import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

import MainContainer from './MainContainer'

function Body() {

  


  return (

    <div className='w-screen flex'>     
        
      <div>
            <Navbar></Navbar>
      </div>


      {/* <MainContainer></MainContainer> */}
        <Outlet/>
    </div>
 
  )
}

export default Body