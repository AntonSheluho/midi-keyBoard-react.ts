import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import closeSVG from '../png/cross.png'
import { toggleIconsWrap } from '../store/slices/ChangeIconSlice'



const IconsDesk = () => {
  const dispatch = useDispatch()
  

  function toggleIconWrap() {
    dispatch(toggleIconsWrap())
  }

  return (
    <div className="iconsWrapper iconsWrapperActive1">
        <div className="icons">
            <img  
                src={closeSVG} 
                alt="back image" 
                className="backAvatar" 
                onClick={() => toggleIconWrap()}
            />
        </div>
    </div>
  )
}

export default IconsDesk