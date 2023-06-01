import React from 'react'
import './Anim.css'

import Logo from "../../pictures/bunny_office_copy_v_1.svg"

// import lolaBunny from '../../pictures/LolaBunny.mp4'

const Anim = () => {
  return (
    <>
      <div className="content-width">
        <div className='block'>
          <img src={Logo} alt="" />
        </div>
        {/* <div className='video'>
          <video src={lolaBunny} type="video/mp4" autoPlay controls muted loop playsInline></video>
        </div> */}
      </div>
    </>
  )
}

export default Anim