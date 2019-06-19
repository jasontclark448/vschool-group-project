import React from 'react'
import axios from 'axios'

export default class Home extends React.Component {
    state = {
        video: ''
    }
    componentDidMount() {
        console.log('home running')
        axios.get('files')
            .then(r => {
                console.log(r)
                console.log('all files: ', r.data)
                console.dir(r)
                // const video = r.data
                console.log('video type: ', typeof video)
                this.setState({ video: r.config.url })
                console.log('state: ', this.state)
            })
    }
    render(){
        return(
            <h1>Home</h1>
        )
    }
}