import React from 'react'
import './Anim.css'

import Logo from "../../pictures/UniConverter 14_20230608230112.gif"

// import lolaBunny from '../../pictures/LolaBunny.mp4'

const Anim = () => {
  return (
    <>
      <div className="content-width">
        <div className='block'>
          <img src={Logo} alt="" />
        </div>
      </div>
    </>
  )
}

export default Anim