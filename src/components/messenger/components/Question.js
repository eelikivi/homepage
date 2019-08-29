import React, { Component } from 'react'

export default class Main extends Component {
	render() {
		return (
			<li className="mb-3 mr-2">
				<button className="btn btn-sm btn-primary" onClick={this.props.onClick}>
					{this.props.question}
				</button>
			</li>
		)
	}
}
