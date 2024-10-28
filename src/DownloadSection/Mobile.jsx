import React from 'react'
import imgae from './Asests/long.png'
import second from './Asests/best.png'

const Mobile = () => {
  return (
    <div 
    style={{height: "502px", backgroundColor: "#FFFFFF" 
      ,overflow: 'hidden'
     }}
    >
      <img
        src={imgae}
        alt=""
        style={{
          position: "relative",
          height: "503px",
          zIndex: 11,
        }}
      />
      <img
        src={second}
        alt=""
        style={{
          position: "relative",
          top: "18px",
          left: "-485px",
          height: "550px",
          objectFit: "cover",
          borderRadius: "90px",
          clipPath: "inset(53px 252px 40px 252px)", 
          zIndex: 3,
          backgroundColor: "#FFFFFF" 
        }}
      />
    </div>
  )
}

export default Mobile