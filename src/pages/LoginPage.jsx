import React from 'react'
import LoginComponent from '../components/LoginComponent'
import { connect } from 'react-redux'
import { login } from '../actions/userAction'
class LoginPage extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">
                        <LoginComponent login={this.props.login}/>
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {login})(LoginPage)