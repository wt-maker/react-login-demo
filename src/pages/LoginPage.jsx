import React from 'react'
import LoginComponent from '../components/LoginComponent'

class LoginPage extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">
                        <LoginComponent />
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage