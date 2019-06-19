import React from 'react'

import { Link } from "react-router-dom"

const Video = p => {
    console.log('p in vid: ', p.filename)
    const style={background: 'red'}
    const vClick = () => {
        console.log(p)

    }
    return (

            <div onClick={vClick} className="video-container" style={style}>
                <h1><Link to={`/play/${p.title}`}>Title: {p.title}</Link></h1>
                <video src={p.filename} width="320" height="240" controls>
                <source src={p.filename} />

                Your browser does not support the video tag.
                </video>
            </div>
    )
}
export default Video