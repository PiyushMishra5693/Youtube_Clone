import './App.css';
import Body from './Components/Body';
import Header from './Components/Header'
import { Provider } from 'react-redux';
import store from './Components/utils/store';




function App() {
 
 
  return (

    <Provider store={ store}>
    <div>
       
        <Header  ></Header>
        <Body ></Body>

    </div>
    </Provider>

   
  );
}

export default App;
