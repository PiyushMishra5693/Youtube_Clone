import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'

function Applayout() {

  return (

    <>
    <Header></Header>
    <div className='w-screen flex'>   

      <div>
            <Navbar></Navbar>
      </div>

        <Outlet/>
    </div>
    
    </>
 
  )
}

export default Applayout;