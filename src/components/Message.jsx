import React from 'react'
import classnames  from 'classnames'


class Message extends React.Component{

    onClick = () =>{
        this.props.deleteMessage(this.props.message.id)
    }

    render(){
        const {type,text} = this.props.message
        return(
            <div className={classnames('alert', {
                'alert-success':type === 'success',
                'alert-danger':type === 'danger',
            })}>
                {text}
                <button onClick={this.onClick} className='close'>&times;</button>
            </div>
        )
    }
}

export default Message
