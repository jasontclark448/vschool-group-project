import React from 'react'

class Upload extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <h1 className='text-center display-4 my-4'>Mongo File Upload</h1>
                        <form action="/uploads" method="POST" enctype='multipart/form-data'>
                            <div className="custom-file mb-3">
                                <input type="file" name='file' id='file' className='custom-file-input' />
                                <label for="file" className='custom-file-label'>Choose File</label>
                                <input type="submit" value="submit" className='btn btn-primary btn-block' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Upload