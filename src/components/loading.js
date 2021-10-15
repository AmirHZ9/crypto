import React from 'react'
import spinner from "../gif/spinner.gif"
function Loading() {
    return (
        <div>
            <img src={spinner} alt="loading"/>
            <h1>Loading ...</h1>
        </div>
    )
}

export default Loading
