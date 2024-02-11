import './App.css';
import Body from './Components/Body';
import Header from './Components/Header'
import { Provider } from 'react-redux';
import store from './Components/utils/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import Watchpage from './Components/Watchpage';




const appRouter = createBrowserRouter([{

    path:"/",
    element:<Body/>,
    children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"/watch",
          element:<Watchpage/>
        }
    ]
}])

function App() {
 
 
  return (

    <Provider store={ store}>
    <div>
       
        <Header  ></Header>
        <RouterProvider router={appRouter}/>

    </div>
    </Provider>

   
  );
}

export default App;
