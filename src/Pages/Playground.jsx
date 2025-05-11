import React from 'react'
import Navbar from '../Layout/Navbar'

const Playgroung = () => {
  return (
    
    <div  style={{color:"white", backgroundColor:"#334155"}}> 
    <Navbar/>
      <h2>Welcome To Playground👨🏻‍💻👩🏻‍💻</h2>
      <iframe
        src="https://onecompiler.com/"
        title="Embedded Content"
        width="100%"
        height="cover"
        allowFullScreen
        style={{width:"100%", height:"100vh"}}
      />
    </div>
  )
}

export default Playgroung
