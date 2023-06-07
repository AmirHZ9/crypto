import React from 'react'
import styles from '../style/coin.module.css'
function Coin(props) {
    return (
        <div className={styles.container}>
            <img src={props.image} ale='img' className={styles.image}/>
            <span className={styles.name}>{props.name}</span>
            <span className={styles.symbol}>{props.symbol.toUpperCase()}</span>
            <span className={styles.price}>${props.price}</span>
            <span className={props.change > 0 ? styles.green : styles.red}>{props.change} </span>
            <span className={styles.market_change}>${props.market_change}</span>
        </div>
    )
}

export default Coin
