import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './component/NavBar/navBar'
import './app.css'
import Registration from './component/Registration/Registration'; 
import Login from './component/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import  {auth}  from '../src/action/LoginUser';
import {useEffect} from 'react'


function App() {
  const isAuth = useSelector(state => state.isAuth)
  const dispatch = useDispatch() 


  useEffect(()=>{
    dispatch(auth())
  } ,[])

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
