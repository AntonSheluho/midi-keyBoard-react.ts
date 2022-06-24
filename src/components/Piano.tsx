import React, { Component } from 'react'
import keys from '../buttonsService/Keys'
import Button from '../UI/Button'
import Key from './Key'
import closeSVG from '../png/closeSVG.svg' 


class Piano extends Component {

  render() {
    return (
      <div className='root4'>
        <div className="bodyShadow"></div>
        <div className="note">
            <div className="title">Please choose the song in what you are interested in:</div>
            <div className="songName"></div>
            <div className="text"></div>
            <div className="text"></div>
            <div className="text"></div>
            <div className="buttWrapper">
                <div className="buttPlay">Play</div>
                <div className="buttPlay">Back</div>
            </div>
        </div>
        <div className="piano">
            {keys.map((k, index) => <Key key={index} keyClass={k.keyClass} keyStyle={k.keyStyle} keyName={k.keyName}/>)}
        </div>
        <div className="buttonExit">Exit</div>
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
                            // src="../../public/png/closeSVG.svg" 
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
                            // src="../../public/png/closeSVG.svg" 
                            src={closeSVG} 
                            alt="back image" 
                            className="backAvatar" 
                        />
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Piano