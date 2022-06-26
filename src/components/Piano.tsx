import React, { Component } from 'react'
import {keys} from '../buttonsService/Keys'
import Account from './Account'
import Key from './Key'



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
        <Account/>
      </div>
    )
  }
}

export default Piano