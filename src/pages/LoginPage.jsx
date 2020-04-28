import React from 'react'
import LoginComponent from '../components/LoginComponent'
/*
token:0b95955996e618fa716e173099f83f12fa4a320f

gist:a942a14aea144ee4e18ec9d422acd1f8
*/
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