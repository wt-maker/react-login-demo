import React from 'react'
const lodash = require('lodash')

class SignComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            usernameErrorMsg: '',
            emailErrorMsg: '',
            passwordErrorMsg: '',
            passwordConfirmErrorMsg: '',
            checkResult: true
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()
        let { username, email, password, passwordConfirm } = this.state

        this.setState({
            usernameErrorMsg: '',
            emailErrorMsg: '',
            passwordErrorMsg: '',
            passwordConfirmErrorMsg: ''
        })

        /* console.log(this.state) */
        if (lodash.isEmpty(username)) {
            this.setState({
                usernameErrorMsg:'请输入用户名',
                checkResult:false
            })
        }
        if (lodash.isEmpty(email)) {
            this.setState({
                emailErrorMsg:'请输入邮箱',
                checkResult:false
            })
        }
        if (lodash.isEmpty(password)) {
            this.setState({
                passwordErrorMsg:'请输入密码',
                checkResult:false
            })
        }
        if (!lodash.isEqual(password, passwordConfirm)) {
            this.setState({
                passwordConfirmErrorMsg:'请确认密码是否一致',
                checkResult:false
            })
        }

        if (this.statecheckResult == true) {
            let {username,email,password,passwordConfirm} = this.state
            let user = {username,email,password,passwordConfirm}
            this.props.addUser(user)
        }
    }

    render() {
        return (
            <form onSubmit={this.signUp}>
                <br /><br />
                <div className="form-group has-success">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.inputChange}
                    />
                    {this.state.usernameErrorMsg }
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.inputChange}
                    />
                    {this.state.emailErrorMsg }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.inputChange}
                    />
                    {this.state.passwordErrorMsg }
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirm">Password Confirm</label>
                    <input
                        type="password"
                        className="form-control"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        onChange={this.inputChange}
                    />
                    {this.state.passwordConfirmErrorMsg }
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default SignComponent
