import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Body() {

  return (

    <div className='w-screen flex'>     
        
      <div>
            <Navbar></Navbar>
      </div>

        <Outlet/>
    </div>
 
  )
}

export default Body