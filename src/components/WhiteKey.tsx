import React, { FC, useEffect, useRef } from 'react';
import { changeKeyDown, changeKeyUp } from '../functions/KeyboardPianoFunctions';

type Props = {
    id: string,
    audio: HTMLAudioElement | null,
    keyStyle: string,
    keyName: string 
}


const Key: FC<Props> = ({id: name, audio: audio, keyStyle: keyStyle, keyName: keyName}) => {

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.addEventListener('keydown', keyDown)
    document.addEventListener('keyup', keyUp)
    document.addEventListener('mousedown', mouseDown)
    document.addEventListener('mouseup', mouseUp)
    document.addEventListener('touchstart', touchStart)
    document.addEventListener('touchend', touchEnd)

    return () => {
      document.removeEventListener('keydown', keyDown)
      document.removeEventListener('keyup', keyUp)
      document.removeEventListener('mousedown', mouseDown)
      document.removeEventListener('mouseup', mouseUp)
      document.removeEventListener('touchstart', touchStart)
    document.removeEventListener('touchend', touchEnd)
    }
  })

  function keyDown(event: KeyboardEvent): void {
    if (event.code === ref.current?.id) {
      changeKeyDown(ref, audio)
    }
  }
  function keyUp(event: KeyboardEvent): void {
    if (event.code === ref.current?.id) {
      changeKeyUp(ref, audio)
    }
  }

  function mouseDown(event: MouseEvent): void {
    if (event.target === ref.current) {
      changeKeyDown(ref, audio)
    }
  }
  function mouseUp(event: MouseEvent): void {
    if (event.target === ref.current) {
      changeKeyUp(ref, audio)
    }
  }
  function touchStart(event: TouchEvent): void {
    if (event.target === ref.current) {
      changeKeyDown(ref, audio)
    }
  }
  function touchEnd(event: TouchEvent): void {
    if (event.target === ref.current) {
      changeKeyUp(ref, audio)
    }
  }

    return (
      <div ref={ref} id={name} className='key' style={{left: keyStyle}}>{keyName}</div>
    )
  
} 

export default Key

// let idArray = [];

// function playSong(song) {
//     clearApi()
//     const acc = song.split(' ');
//     let time1 = 0;

//     acc.forEach(item => {
        
//         for (let i in whiteKeys) {
//             if (item == whiteKeys[i].keyName) {
//                 let id = window.setTimeout(() => {
//                     whiteKeys[i].keyCode.style.backgroundColor = `bisque`;
//                     whiteKeys[i].keyCode.style.border = `3px solid black`;
//                     whiteKeys[i].keyCode.style.height = `91%`; 
//                     whiteKeys[i].keyCode.style.width = `6.36%`; 
//                     whiteKeys[i].audio.play();
    
//                     let id2 = setTimeout(() => {
//                         whiteKeys[i].keyCode.style.backgroundColor = `white`;
//                         whiteKeys[i].keyCode.style.border = `1px solid black`;
//                         whiteKeys[i].keyCode.style.height = `90%`; 
//                         whiteKeys[i].keyCode.style.width = `6.66%`; 
//                         whiteKeys[i].audio.load();
//                     }, 500)
//                     idArray.push(id2);
//                 }, `${time1}`);
//                 idArray.push(id)
//                 time1 += 600; 
//             }
//         }
//     })
// }


  


