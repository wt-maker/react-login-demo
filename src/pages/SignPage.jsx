import React from 'react'
import SignComponent from '../components/SignComponent'

class SignPage extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">
                        <SignComponent />
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
            </div>
        )
    }
}

export default SignPage