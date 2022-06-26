import React from 'react'
import Button from '../UI/Button'
import closeSVG from '../png/closeSVG.svg' 

type Props = {}

const Account = (props: Props) => {
  return (
    <div className="root5" id="root5">
            <div className="wrapper">
                <div className="usersIcon">
                    <img 
                        src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" 
                        alt="avatar" 
                        className="avatar" 
                    />
                </div>
                <div className="linksWrap linkWrapActive">
                    <div className="openMark">
                        <img  
                            src={closeSVG} 
                            alt="close image" 
                            className="imgMark imgMarkActive" 
                        />
                    </div>
                    <div className="welcome">Welcome</div>
                    <Button buttClass='links link1' text='Change Avatar' />
                    <Button buttClass='links link2' text='Change Name' />
                    <Button buttClass='links link3' text='Change Password' />
                </div>
                <div className="iconsWrapper iconsWrapperActive1">
                    <div className="icons">
                        <img  
                            src={closeSVG} 
                            alt="back image" 
                            className="backAvatar" 
                        />
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Account