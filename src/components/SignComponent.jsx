import React from 'react'


class SignComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            usernameErrorMsg: '',
            'errors': ''
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()
        this.props.userActions.addUser(this.state).then(
            ()=>{
                console.log('success')
            },
            ({response})=>{
                this.setState({
                    errors:response.data
                })
            }
        )
    }

    render() {
        const { errors}  = this.state;
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
                    { errors.username && <span className="form-text text-muted">{ errors.username }</span> }
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
                    { errors.email && <span className="form-text text-muted">{ errors.email }</span> }
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
                    { errors.password && <span className="form-text text-muted">{ errors.password }</span> }
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
                    { errors.passwordConfirm && <span className="form-text text-muted">{ errors.passwordConfirm }</span> }
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default SignComponent
