import React from 'react'

class SignComponent extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    }


    render() {
        return (
            <form>
                <br/><br/>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirm">Password Confirm</label>
                    <input type="password" className="form-control" id="passwordConfirm" name="passwordConfirm" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default SignComponent