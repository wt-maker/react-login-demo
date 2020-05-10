import React from 'react'
import classnames  from 'classnames'
import {withRouter} from 'react-router-dom'
class LoginComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password:'',
            errors:{

            },
            isLoading:false
        }
    }

    login = (e) => {

        e.preventDefault()   
        this.setState({
            errors:{},
            isLoading:true
        })
        this.props.login(this.state).then(
            ()=>{
                this.setState({
                    errors:{},
                    isLoading:false
                })
                this.props.history.push('/')
            }
            ,
            ({response})=>{
                this.setState({
                    errors:response.data,
                    isLoading:false
                })
            }
        )
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {

        let {errors, isLoading} = this.state

        return (
            <form onSubmit={this.login}>
                <br/><br/>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className={classnames('form-control', {'is-invalid':errors.email})}
                        id="email"
                        name="email"
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
                        onChange={this.inputChange}
                    />
                    { errors.password && <span className="form-text text-muted">{ errors.password }</span> }
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default withRouter(LoginComponent)