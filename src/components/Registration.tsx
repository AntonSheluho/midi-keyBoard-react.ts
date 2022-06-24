import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { toggleRegistrationState } from '../store/slices/RegistrationSlice'
import Input from '../UI/Input'
import backSVG from '../png/backSVG.svg'
import eyeDisible from '../png/eye-disible.svg'


const Registration = () => {
    const ref1 = useRef<HTMLImageElement>(null)
    const ref2 = useRef<HTMLImageElement>(null)
    const dispatch = useDispatch()

    console.log(ref1.current?.src)

  return (
    <div className="root2">
        <div>
            <form className="entranceWrapperReg">
                <img 
                    src={backSVG} 
                    alt="go back" 
                    className="backMark" 
                    onClick={() => dispatch(toggleRegistrationState())}
                />
                <div className="entranceName">
                    <div className="nameTitle">Registration:</div>
                    <Input 
                        type={"text"} 
                        id={"name"} 
                        placeholder={'Name'} 
                        required={true} 
                        pattern={'[-A-Za-zА-Яа-яЁё ]{1,15}'} 
                        title={'The name should contain 1-15 letters either Latin or Cyrillic language'}
                    />
                    <Input 
                        type={"text"} 
                        id={"surname"} 
                        placeholder={'Surname'} 
                        required={true} 
                        pattern={'[-A-Za-zА-Яа-яЁё ]{1,15}'} 
                        title={'The surname should contain 1-15 letters either Latin or Cyrillic language'}
                    />
                    <Input 
                        type={"email"} 
                        id={"email"} 
                        placeholder={'Email'} 
                        required={true}  
                        title={'Invalid Email'}
                    />
                    <div className="invalidFormText invalidFormText1">
                        User with same email has already been registered
                    </div>
                    <Input
                        type={"password"} 
                        id={"password"} 
                        placeholder={'Password'} 
                        autocomplete={'current-password'}
                        required={true}  
                        title={'The password should be min six sings. Min one number, one uppercase and lowercase letter'}
                        pattern={'[0-9A-Za-z]{6,20}'}
                    />
                    <Input
                        type={"password"} 
                        id={"repeatPassword"} 
                        placeholder={'Repeat password'} 
                        required={true}  
                    />
                    <div className="invalidFormText invalidFormText2">
                        Invalid password
                    </div>
                    <input     // Button to registration
                        type="submit"
                        id="button"
                        value='Log in'
                        className='butt buttonRegistration'
                    />
                    <img 
                        src={eyeDisible} 
                        alt="show password" 
                        className="eye1"
                        ref={ref1}
                        // onClick={() => } 
                    />
                    <img 
                        src={eyeDisible}  
                        alt="show password" 
                        className="eye2"
                        ref={ref2}
                        // onClick={() => } 
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Registration