import React, { Component } from 'react'
import {keys} from '../buttonsService/Keys'
import Account from './Account'
import Desk from './Desk'
import Key from './Key'



class Piano extends Component {

  render() {
    return (
      <div className='root4'>
        <div className="bodyShadow"></div>
        <Desk/>
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