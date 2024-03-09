import './App.css';
import { Provider } from 'react-redux';
import store from './Components/utils/store';
import {  createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import Watchpage from './Components/Watchpage';
import { SearchPage } from './Components/SearchPage';
import Applayout from "./Components/Applayout"




const appRouter = createBrowserRouter([{

    path:"/",
    element:<Applayout/>,
    children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"/watch",
          element:<Watchpage/>
        },
        {
          path:"/search",
          element:<SearchPage/>
        }
    ]
}])

function App() {
 
 
  return (

    <Provider store={ store}>
    <div>
        
        <RouterProvider router={appRouter}/>
        
    </div>
    </Provider>

   
  );
}

export default App;
