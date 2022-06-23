import React, { Component, FC } from 'react'

// interface keyProps {
//     class: string;
//     style: string;
//     name: string
// }

type Props = {
    id: number,
    keyClass: string,
    keyStyle: string,
    keyName: string 
}

const Key: FC<Props> = ({keyClass: keyClass, keyStyle: keyStyle, keyName: keyName}) => {

    return (
      <div className={keyClass} style={{left: keyStyle}}>{keyName}</div>
    )
  
}

export default Key