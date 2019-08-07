import React, {Component} from 'react'

export default class Message extends Component {
	render() {
		return (
			<span className="Messenger__Message">
				{this.props.content}
			</span>
		)
	}
}