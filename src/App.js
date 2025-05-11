import React from 'react'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login  from './Pages/Login'
import Signin from './Pages/Signin'
import AboutUs from './Pages/AboutUs'
import JavaScript from './Pages/JavaScript'
import Playground from './Pages/Playground'
import Html from './Pages/Html'
import Css from './Pages/Css'
import Java from './Pages/Java'
import CPP from './Pages/CPP'

const App = () => {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/javascript" element={<JavaScript/>}/>
          <Route path="/html" element={<Html/>}/>
          <Route path="/playground" element={<Playground/>}/>
          <Route path="/css" element={<Css/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/java" element={<Java/>}/>
          <Route path="/cpp" element={<CPP/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;