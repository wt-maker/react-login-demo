import React from 'react'
import Message from './Message'
import { connect } from 'react-redux'
import {deleteMessage} from '../actions/messageAction'

class MessageList extends React.Component{
    render(){
        const messages = this.props.messages.map(message => {
            return <Message key={message.id} message={message} deleteMessage={this.props.deleteMessage}/>
        })

        return(
            <div className='container'>
                {messages}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        messages : state.addMessages
    }
}

export default connect(mapStateToProps,{deleteMessage})(MessageList)
