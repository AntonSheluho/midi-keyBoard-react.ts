import { Store } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleEntranceState } from '../store/slices/EntranceSlice'
import { disabledEye3 } from '../store/slices/Eye3Slice'
import backSVG from '../png/backSVG.svg'
import eyeDisible from '../png/eye-disible.svg'

// type StoreProps = {
//     state: Store
// }


const Entrance = () => {

    const dispatch = useDispatch()


  return (
    <div className="root3">
        <div className="entranceWrapperReg entranceWrapper">
            <form className="entranceForm">
                <input 
                    type="email" 
                    className="formFactor"
                    placeholder='Email'
                    required={true}
                    id='entranceEmail'
                />
                <input 
                    type="password" 
                    className="formFactor"
                    placeholder='Password'
                    required={true}
                    id='entrancePassword'
                    autoComplete='current-password'
                />
                <div className="errorEntranceText">Invalid email or password</div>
                <div className="entranceButtons">
                    <input 
                        type="submit" 
                        value="Entrance" 
                        className="butt" 
                    />
                </div>
            </form>
            <img 
                src={backSVG} 
                alt="go back" 
                className="backEntranceMark" 
                onClick={() => dispatch(toggleEntranceState())}
            />
            <img 
                src={eyeDisible} 
                alt="check password" 
                className="eye3" 
                onClick={() => dispatch(disabledEye3())}
            />
        </div>
    </div>
  )
}

export default Entrance