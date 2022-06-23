import React from 'react'
import Button from '../UI/Button'
import Entrance from './Entrance'
import Clock from './Clock'
import { useDispatch } from 'react-redux'
import { toggleEntranceState } from '../store/EntranceSlice'

const FirstPage = () => {

    const dispatch = useDispatch()
    
    return (
        <div className="root1">
            <Clock/>
            <div className="picture">
                <div className="message">'You have been successfully registered'</div>
                <div className="pictureContent pictureFirstContent1">Would you like to learn how to play the piano?</div>
                <div className="pictureContent pictureFirstContent2">You can achieve your dreams with us!</div>
                <div className="pictureContent pictureFirstContent3">
                    <div className="buttonWrapper">
                        {/* <div className="button buttonLogOn">Log 0n</div>
                        <div className="button buttonLogIn">Log in</div> */}
                        <Button buttClass='button buttonLogOn' text='Log on' toggle={() => dispatch(toggleEntranceState())}/>
                        <Button buttClass='button buttonLogIn' text='Log in' toggle={() => dispatch(toggleEntranceState())}/>
                    </div>
                </div>
                <div className="pictureShadow"></div>
            </div>
            <Entrance />
            {/* <div className="root2"></div> */}
            
        </div>
    )
}

export default FirstPage