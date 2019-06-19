import React, { Component } from 'react'
import axios from 'axios'
// import Video from './Video'
import { withVideo } from './GlobalProvider'
// import vid from './videos/myvid.mov'
// import "node_modules/video-react/dist/video-react.css"

class Play extends Component {
    state = {
        video: ''
    }
    // id = props.match.params
    componentDidMount() {
        // console.log('player')
        axios.get(this.b)
            .then(r => {
                // console.log(r)
                // console.log('all files: ', r.data)
                // console.dir(r)
                // const video = r.data
                // console.log('video type: ', typeof video)
                this.setState({ video: r.config.url })
                this.setState({ videos: r })
                // console.log('state: ', this.state.videos)
                // console.log('this.state.video.config.url',this.state.videos.config.url)
            })
    }
    a = this.props.location.pathname
    b = this.a.slice(6)
    render() {
       
        console.log('in player A:', this.a)
        console.log('in player b:', this.b)
        
        return <>
           <h1>Video: {this.state.video}</h1>
                <video src={this.state.video} width="320" height="240" controls>
                Your browser does not support the video tag.
                </video>
        </>
    }
}
export default withVideo(Play)
