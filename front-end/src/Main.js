import React, { Component } from 'react'
import axios from 'axios'
import Video from './Video'


// import vid from './videos/myvid.mov'
// import "node_modules/video-react/dist/video-react.css"

import { Link } from "react-router-dom"

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            videos: [],
            filename: '',
            Author: 'Sam'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        axios.get('files')
            .then(r => {
                console.log('t', r)
                // console.log('all files: ', r.data)
                // console.dir(r)
                // const video = r.data
                // console.log('video type: ', typeof video)
                // this.setState({ videos: [r.config.url]})
                this.setState({ videos: r.data})
                // console.log('state: ', this.state.videos)
            })
    }

    handleClick = () => {
        console.log(this)
    }

    render() {
        console.log('right here')
        console.log(this.state.videos)
        const mappedVideos = this.state.videos.map((vid) => {
            // return <>
            //     <video src={vid.filename} width="320" height="240" controls />
            //     <source src={vid.filename} />
            // </>
            return (
                <>
                    <Video key={vid.filename + vid._id} filename={vid.filename} click={this.handleClick} key={vid._id} title={vid.filename} />
                </>
            )
        })
        return (
            <div className='content' style={{ display: 'grid', gridTemplateColumns: "1fr 1fr", gridGap: '5pt' }}>
                {mappedVideos}
            </div>
        )
    }
}


