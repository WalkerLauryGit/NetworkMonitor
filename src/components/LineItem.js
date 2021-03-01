import React, { useState, useEffect } from 'react'

export default LineItem = () => {

    const [onlineStatus, setOnlineStatus] = useState(props.onlineStatus)

    // Function that runs every 30000ms to check the new status of the ping https://stackoverflow.com/questions/65049812/how-to-call-a-function-every-minute-in-a-react-component

    const INTERVAL_MS = 30000

    useEffect(() => {
        const interval = setInterval(() =>{
            // check the fetch request and set the status if it changed
            // This is setting it to true no matter what.  This will run constantly
            setOnlineStatus(true)
        }, INTERVAL_MS)
        return () => {
            clearInterval(interval)
        }
    }, [])

    // Function that actually fetches the status of the ping

    return (
        <div className="card">
            <div className="card-name">
                <h2>{name}</h2>
            </div>
            <div className="card-info">
                <span className="ip">{ip}</span> <span className="address">{address}</span> <span className="status"><p style={{ color: onlineStatus ? 'green' : 'red' }}>{onlineStatus}</p></span>
            </div>
        </div>
    )
}
