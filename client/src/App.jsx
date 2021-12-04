import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './component/navBar/NavBar'
import './app.css'
import Registration from './component/registration/registration'; 

function App() {
  return (
    <BrowserRouter>
      <div className = "app"> 
        <NavBar/>
        <div className="main">
          <Routes>
            <Route path ='/registration' element = {<Registration/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
