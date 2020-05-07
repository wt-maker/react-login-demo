import React from 'react'
import SignComponent from '../components/SignComponent'
import { connect } from 'react-redux'
import * as userActions from '../actions/userAction'
import {bindActionCreators} from 'redux'

class SignPage extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">
                        <SignComponent userActions={this.props.userActions}/>
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        userActions:bindActionCreators(userActions, dispatch)
    }
}

export default connect(null,mapDispatchToProps)(SignPage)
