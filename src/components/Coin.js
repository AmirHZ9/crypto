import React from 'react'

function Coin(props) {
    return (
        <div>
            <img src={props.image} ale='img' style={{width:'20px'}}/>
            <span>{props.name}</span>
            <span>{props.symbol.toUpperCase()}</span>
            <span>{props.price.toLocaleString()}</span>
            <span>{props.change.toLocaleString()}</span>
            
        </div>
    )
}

export default Coin
