import React from 'react'
import LineItem from './LineItem'

export default function Monitor() {

    const locations = []

    return (
        <div>
            {locations.map(location => {
                <LineItem 
                key={location.name}
                name={location.name} 
                ip={location.ip} 
                address={location.address} 
                onlineStatus = {location.onlineStatus}
            />
            })}
        </div>
    )
}
