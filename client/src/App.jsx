import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './component/NavBar/navBar'
import './app.css'
import Registration from './component/Registration/Registration'; 
import Login from './component/Login/Login';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.isAuth)
  return (
    <BrowserRouter>
      <div className = "app"> 
        <NavBar/>
        <div className="main">
          {!isAuth &&
            <Routes>
              <Route path ='/registration' element = {<Registration/>}/>
              <Route path ='/login' element = {<Login/>}/>
            </Routes>
          }
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
