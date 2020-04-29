import React from 'react'
import SignComponent from '../components/SignComponent'
import { connect } from 'react-redux'
import {ADD_USER} from '../constants'

class SignPage extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">
                        <SignComponent addUser={this.props.addUser}/>
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispach) {
    return {
        addUser: ()=>dispach({type:ADD_USER})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignPage)
