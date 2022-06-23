import { Store } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectorEnrtance} from '../store'
import { toggleEntranceState } from '../store/EntranceSlice'

// type StoreProps = {
//     state: Store
// }


const Entrance = () => {

    const isEntrance = useSelector(selectorEnrtance)
    // const isEntrance = store.getState()
    console.log(isEntrance)
    const dispatch = useDispatch()


  return (
    <div>
        {isEntrance 
            ? <div className="root3">
                <div className="entranceWrapperReg entranceWrapper">
                    <form className="entranceForm"></form>
                    <img 
                        src="./png/backSVG.svg" 
                        alt="go back" 
                        className="backEntranceMark" 
                        onClick={() => dispatch(toggleEntranceState())}
                    />
                </div>
            </div>
            : <div></div>
        }
    </div>
  )
}

export default Entrance