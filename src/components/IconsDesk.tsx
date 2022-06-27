import React from 'react'
import closeSVG from '../png/closeSVG.svg'

type Props = {}

const IconsDesk = (props: Props) => {
  return (
    <div className="iconsWrapper iconsWrapperActive1">
        <div className="icons">
            <img  
                src={closeSVG} 
                alt="back image" 
                className="backAvatar" 
            />
            
        </div>
    </div>
  )
}

export default IconsDesk