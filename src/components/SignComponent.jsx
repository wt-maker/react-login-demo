import React from 'react'
import { withRouter } from "react-router-dom"
import classnames  from 'classnames'

class SignComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            usernameErrorMsg: '',
            errors: {},
            isLoading:false
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()
        this.setState({
            errors:{},
            isLoading:true
        })
        this.props.userActions.addUser(this.state).then(
            ()=>{
                this.props.messageActions.addMessage({
                    type:'success',
                    text:'注册成功'
                })
                this.props.history.push('/')
            },
            ({response})=>{
                this.setState({
                    errors:response.data,
                    isLoading:false
                })
            }
        )
    }

    checkUsernameExist = (e) => {
        let field = e.target.name
        let value = e.target.value
        if (value != '') {
            this.props.userActions.checkUsernameExist(this.state.username).then(
                (response)=>{

                    let errors = this.state.errors;
                    if (response.data[0]) {
                        errors[field] = "用户名存在"
                    } else {
                        errors[field] = ''
                    }
                    this.setState({ errors })
                }
            )
        }
    }

    render() {
        const { errors, isLoading}  = this.state;
        return (
            <form onSubmit={this.signUp}>
                <br /><br />
                <div className="form-group has-success">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        className={classnames('form-control', {'is-invalid':errors.username})}
                        id="username"
                        name="username"
                        value={this.state.username}
                        onBlur={this.checkUsernameExist}
                        onChange={this.inputChange}
                    />
                    { errors.username && <span className="form-text text-muted">{ errors.username }</span> }
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className={classnames('form-control', {'is-invalid':errors.email})}
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.inputChange}
                    />
                    { errors.email && <span className="form-text text-muted">{ errors.email }</span> }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className={classnames('form-control', {'is-invalid':errors.password})}
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.inputChange}
                    />
                    { errors.password && <span className="form-text text-muted">{ errors.password }</span> }
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirm">Password Confirm</label>
                    <input
                        type="password"
                        className={classnames('form-control', {'is-invalid':errors.passwordConfirm})}
                        id="passwordConfirm"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        onChange={this.inputChange}
                    />
                    { errors.passwordConfirm && <span className="form-text text-muted">{ errors.passwordConfirm }</span> }
                </div>
                <button type="submit" disabled={isLoading} className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default withRouter(SignComponent)
