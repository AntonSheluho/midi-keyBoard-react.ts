import React, { useEffect, useState } from 'react'
import moment from 'moment'

type Props = {}

const Clock = (props: Props) => {

    const [clock, setClock] = useState(moment().format('hh:mm:ss'))

    useEffect(() => {
        let clock = clockInterval()
        return () => {clearInterval(clock)}
    })

    function clockInterval() {
        return setInterval(() => setClock(moment().format('hh:mm:ss')), 1000);
    }


  return (
    <div className="clock">{clock}</div>
  )
}

export default Clock